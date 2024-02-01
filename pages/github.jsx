import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

const GithubPage = ({ repos, user }) => {
  console.log(user, repos);

  return (
    <>
      <div className="m-8 overflow-scroll portrait:w-1/5 landscape:w-2/5">
        <div className="flex flex-col items-center justify-center mb-6 bg-sidebar-background h-32 rounded-sm w-full">
          <div className="flex items-center space-x-4 portrait:flex-col portrait:space-x-0 portrait:space-y-2 landscape:flex-row landscape:justify-between landscape:flex">
            <div className="">
              <Image
                src="/images/issa-profile-pic.JPEG"
                alt="avatar"
                width={80}
                height={80}
                className="rounded-sm portrait:hidden landscape:block"
              />
            </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        className="bg-topbar-firstButton text-xs font-semibold mr-2 px-1.5 py-1.5 rounded dark:bg-green-700 dark:text-green-200 portrait:hidden"
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
        <div className="my-12 bottom-0 landscape:w-4/5">
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
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.NEXT_GITHUB_API_KEY}`,
      },
    }
  );
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
  let repos = await repoRes.json();
  const allowedTopics = ["javascript"];
  repos = repos.filter((repo) =>
    repo.topics.some((topic) => allowedTopics.includes(topic))
  );

  return {
    props: { title: "GitHub", repos, user },
    revalidate: 3600,
  };
}

export default GithubPage;
