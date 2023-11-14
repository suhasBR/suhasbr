import React from "react";
import Link from "next/dist/client/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function projects() {
  return (
    <div className="flex relative flex-col">
      <Navbar />
      <section className="w-full bg-white md:pt-16 xl:pt-16 lg:pt-16 pt-4 flex flex-col px-8 md:px-16 lg:px-16 xl:px-16">
        {/* <h1 className="text-3xl text-black font-semibold">Recent Projects</h1> */}

        <div className="mt-20 mb-8 md:my-24 lg:my-24 xl:my-24 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly">
          <div className="w-full my-8 flex flex-col items-start md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <Link href="https://colllabdocs-v2.vercel.app/" passHref={true}>
              <h2 className="md:text-3xl lg:text-3xl xl:text-3xl text-2xl mb-4 font-extrabold tracking-wide cursor-pointer">
                CollabDocs
              </h2>
            </Link>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg font-semibold mb-4">
              AI powered tools for better education
            </p>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg text-xl mb-2">
              AI-powered education tool that helps schools and colleges deliver
              better learning experiences. The platform integrates AI into
              classrooms, providing adaptive quizzes, self-help bots, and more
            </p>
            <Link href="https://colllabdocs-v2.vercel.app/" passHref={true}>
              <p className="break-all text-indigo-600 cursor-pointer md:text-xl lg:text-xl xl:text-xl text-lg">
                https://colllabdocs-v2.vercel.app/
              </p>
            </Link>
          </div>
          <img
            src="images/collabdocs.png"
            alt="collabdocs"
            className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] border"
          />
        </div>

        <div className="my-8 md:my-24 lg:my-24 xl:my-24 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly">
          <div className="w-full my-8 flex flex-col items-start md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <Link href="https://technologydao.xyz/" passHref={true}>
            <h2 className="md:text-3xl lg:text-3xl xl:text-3xl text-2xl mb-4 font-extrabold tracking-wide cursor-pointer">
                TechnologyDAO
              </h2>
            </Link>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg font-bold font-semibold mb-4">
              Publish AI augmented articles and earn tokens
            </p>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg mb-2">
              TechnologyDAO is a decentralized community / platform that allows
              you to publish AI augmented articles. You can earn money by
              publishing articles and contributing to the platform
            </p>
            <Link
              href="https://technologydao.xyz/"
              target="_blank"
              passHref={true}
            >
              <p className="break-all md:text-xl lg:text-xl xl:text-xl text-lg text-indigo-600 cursor-pointer">
                https://technologydao.xyz/
              </p>
            </Link>
          </div>
          <img
            src="images/technologydao.png"
            alt="collabdocs"
            className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] border"
          />
        </div>

        <div className="my-8 md:my-24 lg:my-24 xl:my-24 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly">
          <div className="w-full my-8 flex flex-col items-start md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <Link
              href="https://github.com/suhasBR/zku-final-project"
              passHref={true}
            >
              <h2 className="md:text-3xl lg:text-3xl xl:text-3xl text-2xl mb-4 font-extrabold tracking-wide cursor-pointer">
                zkEmailAuth
              </h2>
            </Link>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg font-semibold my-2">
              Creating email verified anonymous identities with Zero Knowledge
              Proofs
            </p>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg mb-2">
              Anonymous identities are of prime importance today for
              applications that promise privacy and anonymity to its users.
              However, often there is a need for these applications to confirm
              if their users are authentic, i.e, probably belong to a certain
              group or an organization. One of the possible methods to confirm
              this would be to verify the users email, without compromising on
              the users anonymity. zkEmailAuth project aims to achieve the same.
            </p>
            <Link
              href="https://github.com/suhasBR/zku-final-project"
              passHref={true}
            >
              <p className="break-all md:text-xl lg:text-xl xl:text-xl text-lg text-indigo-600 cursor-pointer">
                https://github.com/suhasBR/zku-final-project
              </p>
            </Link>
          </div>
          <img
            src="images/zkdao.png"
            alt="collabdocs"
            className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] border"
          />
        </div>

        <div className="my-8 md:my-24 lg:my-24 xl:my-24 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly">
          <div className="w-full my-8 flex flex-col items-start md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <Link
              href="https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72"
              passHref={true}
            >
              <h2 className="md:text-3xl lg:text-3xl xl:text-3xl text-2xl mb-4 font-extrabold tracking-wide cursor-pointer">
                Defi Explorer
              </h2>
            </Link>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg mb-2">
              A simple interactive game built with Unity-ReactJS to encourage
              new users to use Decentralized Finance products by gamifying the
              learning process.{" "}
              <span className="text-sky-500">
                Winner of EthGlobal HackMoney 2022 Hackathon (Best Use -
                WalletConnect category)
              </span>
            </p>
            <Link
              href="https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72"
              passHref={true}
            >
              <p className="break-all md:text-xl lg:text-xl xl:text-xl text-lg text-indigo-600 cursor-pointer">
                https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72
              </p>
            </Link>
          </div>
          <img
            src="images/defiexplorer.png"
            alt="collabdocs"
            className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] border"
          />
        </div>

        <div className="my-8 md:my-24 lg:my-24 xl:my-24 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly">
          <div className="w-full my-8 flex flex-col items-start md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <Link
              href="https://ethglobal.com/showcase/miner-pets-dao-snf41"
              passHref={true}
            >
              <h2 className="md:text-3xl lg:text-3xl xl:text-3xl text-2xl mb-4 font-extrabold tracking-wide cursor-pointer">
                Minerpets DAO
              </h2>
            </Link>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg mb-2">
              This project acts as an opensource framework to help people design
              and make their own world , IP and arrange the dat in a community.
              The idea is to have people onboard themselves to the DAO as
              quickly as possible and have them contribute to the project.
              <span className="text-sky-500">
                Winner of EthGlobal DaoHacks 2022 Hackathon (Best Use - Unlock
                category)
              </span>
            </p>

            <Link
              href="https://showcase.ethglobal.com/daohacks/miningpetsdao-snf41"
              passHref={true}
            >
              <p className="break-all w-100 text-xl text-indigo-600 cursor-pointer">
                https://showcase.ethglobal.com/daohacks/miningpetsdao-snf41
              </p>
            </Link>
          </div>
          <img
            src="images/minerpets.png"
            alt="collabdocs"
            className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] border"
          />
        </div>

        <div className="mt-8 mb-12 md:my-24 lg:my-24 xl:my-24 w-full flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly">
          <div className="w-full my-8 flex flex-col items-start md:w-[30%] lg:w-[30%] xl:w-[30%]">
            <Link
              href="https://github.com/suhasBR/delta-racers"
              passHref={true}
            >
              <h2 className="md:text-3xl lg:text-3xl xl:text-3xl text-2xl mb-4 font-extrabold tracking-wide cursor-pointer">
                Delta Racers
              </h2>
            </Link>
            <p className="md:text-xl lg:text-xl xl:text-xl text-lg mb-2">
              Delta racers is a simple game where you can participate in races
              which are controlled by cryptocurrency/asset prices. Racers can
              buy individual car parts , build their own car , Hire drivers and
              race them in races against each other. The combination of the
              different car components give different affinity towards specific
              cryptocurrency prices. In all the Game plays very similar to ZED
              run , with the exception being that the cars performance directly
              depends on the underlying cryptocurrency Asset.
            </p>
            <Link
              href="https://github.com/suhasBR/delta-racers"
              passHref={true}
            >
              <p className="break-all md:text-xl lg:text-xl xl:text-xl text-lg text-indigo-600 cursor-pointer">
                https://github.com/suhasBR/delta-racers
              </p>
            </Link>
          </div>
          <img
            src="images/deltaracers.png"
            alt="collabdocs"
            className="w-full md:w-[60%] lg:w-[60%] xl:w-[60%] border"
          />
        </div>

        {/* <div className="w-full my-8 flex flex-col items-start">
          <Link href="https://www.landbroker.in" passHref={true}>
            <h2 className="text-xl text-sky-500 tracking-wide cursor-pointer">
              Land Broker
            </h2>
          </Link>
          <p className="text-base">
            Real estate property listing application with admin controls. Built
            with MERN stack
          </p>
          <Link href="https://www.landbroker.in" passHref={true}>
            <p className="text-base text-indigo-600 cursor-pointer">
              https://www.landbroker.in
            </p>
          </Link>
        </div> */}
      </section>
      <Footer />
    </div>
  );
}

export default projects;
