import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "John Smith",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fucaDFIssV8tq1ER43ewtTW~8ZGR1kdiIPCh8CzpzXbz95JMUeO78-Fe0BphvSTcNJApv6YwK3ZmRJxQWqzxGdjsTH9vLB4W6Q9ehSOIDsY0IQFZK9iARdA~Vi4jWXbwUV-~4URxWPwbOV6zl2WOt~bM3BmwTWNQomB-0OiXP8ey-l4rp-Xvs5g7g6RzoZ976C~YsqokosXtG-cXf-C~ncYCXiHoDV8ic6E5S-QVvT5fUhsRnN~dYwP2XwmfNvLXSO~H5SVI30oA6IJ2FZpggxJW4O62CyAONfWFB-7nIg~fdx-FMFzSItG-A5y3RPBGgD8i8DT6cCjPFpzArFiCXw__",
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COYH5ykicRH5TRTyGWt4CcAkdYWhK1RWN~XxMWgGU7OjDsjPnhngpd4Ee3crOGADlX~QNkGCRGn3HLVrLsAaLDsCL7n49yR3hj-qU6mdwDdc8aBMx-LQSd8ykOn45F120mm~75J-AABufimRuFVwUMlQAt4sw35Ra7Pn4NoeKDi~4DfTz0b~A9OQjCXL4m2SMuAuw-kljujLRTfmsyyW2n3q~vyC7L-ZvilAM-1fOiGanqQTW7tgMrRO0PPQSZp9fr21fdq2jpH1QbpNuP~zh8p7AcOyROI5r1tVVGKj6nUvjjcTGoJxHbyvV~2smLXt5DaAXXmSNV-njN3oSRJVww__",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kvokLtETuJb120WXkkou8gp8JH0S46SvTBb1kl-DcgMKaStLyyrvBDroeSNX4ndXR0J7oy~Lbil0qxs805ipaRYJBvx-WTswOvUg1~cA4mHNLdqblsZ-jpzT1Ikh3wAhLlki2KqDAQ~NwTruZjsklCV1hSRUF~mFna3tzgaDauT19jYNA~8nvTCIsmMcfO33KxSWg5ObB0exCAyAENFC5uwf7m8ZQ5GEMpz2AloWFe-r~VxwNNT6RaoqqJ66IoRDXKjXJj9WqjCXS8i15UROPv2JFEOvBRspfV0-BXOKIiH4B9juLmbypz9a6n7UGrhJtsDJaQL4QaRHjKGGJWBrrQ__",
  },
];

const TeamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
        Team
      </h2>

      <div className="space-y-6 sm:space-y-8">
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
            Description
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
            nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
            quam. Facilisis purus convallis quam augue.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-blue-50 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <div className="flex flex-col items-center sm:items-start">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm">{member.designation}</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
