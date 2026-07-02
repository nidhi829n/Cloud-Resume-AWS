import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const journey = [
  {
    icon: <Globe size={24} />,
    title: "Frontend Development",
    description:
      "Started building responsive user interfaces with React and modern UI libraries.",
  },
  {
    icon: <Server size={24} />,
    title: "Backend Development",
    description:
      "Built REST APIs, authentication systems and scalable backend services using Node.js & Express.",
  },
  {
    icon: <Database size={24} />,
    title: "Database Engineering",
    description:
      "Worked with MongoDB, MySQL and PostgreSQL while designing efficient data models.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure Applications",
    description:
      "Implemented JWT Authentication, OAuth, bcrypt encryption and protected APIs.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Technologies",
    description:
      "Currently exploring AWS services including EC2, S3, IAM, VPC, CloudFront, Lambda and DynamoDB.",
  },
];

function CloudJourney() {
  return (
    <section id="cloud" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="mt-4 text-5xl font-black">
            Learning.
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Building.
            </span>
            Deploying.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            My goal is to build applications that are not only functional
            but also scalable, secure and cloud-ready.
          </p>
        </motion.div>

        <div className="relative mt-20">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 to-cyan-500"></div>

          <div className="space-y-10">

            {journey.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative pl-20"
              >

                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg">

                  {item.icon}

                </div>

                <div className="rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/20 transition">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-8">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default CloudJourney;