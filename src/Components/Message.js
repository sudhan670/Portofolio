// import React from "react";
// import { useRef } from "react";
// import contact from "../Components/contact.svg";
// import emailjs from "@emailjs/browser";
// import { Flex } from "@chakra-ui/react";
// import { useMediaQuery } from "@chakra-ui/react";
// import {
//   FormControl,
//   FormLabel,
//   Image,
//   Input,
//   Button,
//   Stack,
//   Textarea,
//   FormHelperText,
// } from "@chakra-ui/react";
// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_wiu4s3i",
//         "template_wayx3pw",
//         form.current,
//         "bplErjb-7j_HSvWNc"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
//   const [isMedia] = useMediaQuery("(min-width:300px)");
//   return (
//     <Stack direction={isMedia ? "row" : "column"}>
//       <Flex ml={isMedia ? 6 : 0}>
//         <Image
//           src={contact}
//           alt="Green double couch with wooden legs"
//           borderRadius="lg"
//           w="350px"
//           h="35vh"
//         />
//       </Flex>
//       <Flex>
//         <FormControl ref={form} onSubmit={sendEmail}>
//           <FormLabel>Email address</FormLabel>
//           <Input type="email" />
//           <FormHelperText>We'll never share your email.</FormHelperText>
//           <FormLabel>Name</FormLabel>
//           <Input type="name" />
//           <FormHelperText>Enter Your name</FormHelperText>

//           <FormLabel>Message</FormLabel>
//           <Textarea name="message" />
//           <br></br>
//           <Button
//             colorScheme="blue"
//             type="submit"
//             justifyContent={"center"}
//             spacing="12"
//             value="Send"
//           >
//             Send<i className="fa fa"></i>
//           </Button>
//         </FormControl>
//       </Flex>
//       <Flex>
//         <hr style={{ color: "red", backgroundColor: "red", height: 2 }} />
//       </Flex>
//     </Stack>
//   );
// };

// export default Contact;
import React from "react";
import { useRef } from "react";
import contact from "../Components/contact.svg";
import emailjs from "@emailjs/browser";
import "./Message.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wiu4s3i",
        "template_wayx3pw",
        form.current,
        "bplErjb-7j_HSvWNc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section id="#contact">
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={contact} className="w-75" alt="Image1" />
            </div>
            <div className="row my-5">
              <div className="col-md-12">
                <h3 className="fs-30 text-center mb-4 ">
                  <b>Contact Me</b>
                </h3>
                <hr className="w-25 mx-auto"></hr>
              </div>
            </div>
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" value="Send" className="btn btn-primary">
                  Send<i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div>
          <button className="btn btn-success">
            <a
              href="https:/wa.me/+918072109044"
              class="whatsapp_float"
              target="_new"
            >
              <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
            </a>
          </button>
        </div>  */}
      </section>
    </div>
  );
};

export default Contact;
