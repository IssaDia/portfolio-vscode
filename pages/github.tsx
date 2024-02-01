import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

const GithubPage = ({ repos, user }: any) => {
  console.log(user, repos);

  return (
    <>
      <div className="m-8 overflow-collapse">
        <div className="flex flex-col items-center justify-center mb-6 bg-sidebar-background h-32 rounded-sm w-full">
          <div className="flex items-center justify-center space-x-4 iphonePortrait:flex-col iphonePortrait:space-x-0 iphonePortrait:space-y-2">
            <div className="flex items-center space-x-4 ">
              <Image
                src="/images/issa-profile-pic.JPEG"
                alt="avatar"
                width={80}
                height={80}
                className="rounded-sm iphonePortrait:hidden"
              />
              <div className="border-r border-topbar-firstButton pr-4 iphonePortrait:border-none">
                <div className="text-sm">{user.login}</div>
              </div>
            </div>
            <div className="border-r border-topbar-firstButton px-4 text-center iphonePortrait:border-none">
              <span className="text-white text-sm flex iphonePortrait:flex-row iphonePortrait:space-x-1">
                <p>{user.public_repos} </p>
                <p> repos</p>
              </span>
            </div>
            <span className="text-white text-sm">
              {user.followers} followers
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo: any) => (
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
                    {repo.topics.map((topic: string) => (
                      <span
                        key={topic}
                        className="bg-topbar-firstButton text-xs font-semibold mr-2 px-1.5 py-1.5 rounded dark:bg-green-700 dark:text-green-200"
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
        <div className="my-12 fixed bottom-0">
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
  repos = repos.filter((repo: any) =>
    repo.topics.some((topic: string) => allowedTopics.includes(topic))
  );

  return {
    props: { title: "GitHub", repos, user },
    revalidate: 3600,
  };
}

export default GithubPage;
