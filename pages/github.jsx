import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

const GithubPage = ({ repos, user, error }) => {
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <div className="p-8 overflow-scroll ipadLandscape:w-full">
        <div className="flex flex-col items-center justify-center mb-6 bg-sidebar-background h-32 rounded-sm w-full cursor-pointer">
          <div className="flex items-center space-x-4 phone:flex-col phone:space-x-0 phone:space-y-2 landscape:flex-row landscape:justify-between">
            <Image
              src="/images/issa-profile-pic.JPEG"
              alt="avatar"
              width={80}
              height={80}
              className="rounded-sm phone:hidden landscape:block"
            />{" "}
            <div className="landscape:border-r landscape:border-topbar-firstButton px-2">
              <p className="text-xs">{user.login}</p>
            </div>
            <div className="landscape:border-r landscape:border-topbar-firstButton px-2">
              <p className="text-xs">{user.public_repos} repos </p>
            </div>
            <div className="px-2">
              <p className="text-xs">{user.following} following</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-sidebar-background p-4">
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className=" p-4 rounded-lg cursor-pointer"
              >
                <div className="font-bold text-l mb-2 text-topbar-firstButton">
                  {repo.name.toUpperCase()}
                </div>
                <p className="text-white text-sm">{repo.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-topbar-firstButton text-xs font-semibold mr-2 px-1.5 py-1.5 rounded dark:bg-green-700 dark:text-green-200 phone:hidden"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="my-4 bg-sidebar-background p-4 rounded-sm w-full cursor-pointer landscape:w-full phone:hidden ipadLandscape:block">
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_GITHUB_API_KEY}`,
        },
      }
    );
    if (!userRes.ok) {
      throw new Error("Failed to fetch user.");
    }
    const user = await userRes.json();

    const nb_repos = 30;
    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=${nb_repos}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_GITHUB_API_KEY}`,
        },
      }
    );
    if (!repoRes.ok) {
      throw new Error("Failed to fetch repositories.");
    }
    let repos = await repoRes.json();
    const allowedTopics = ["javascript"];
    repos = repos.filter(
      (repo) =>
        repo.topics &&
        repo.topics.some((topic) => allowedTopics.includes(topic))
    );

    return {
      props: { title: "GitHub", repos, user },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error.message || "An error occurred while fetching data.",
      },
      revalidate: 3600,
    };
  }
}

export default GithubPage;
