import React from "react";
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Example extends React.Component {
    //other logic
    render() {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        );
    }
}

// import { useState } from "react";
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
//
// // Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
//
// function Example() {
//     let [loading, setLoading] = useState(true);
//     let [color, setColor] = useState("#ffffff");
//
//     return (
//         <div className="sweet-loading">
//             <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//             <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
//
//             <ClipLoader color={color} loading={loading} css={override} size={150} />
//         </div>
//     );
// }
//
// export default Example;


// import React, {useRef} from 'react';
// import './Example.css';
// import {useScrollSequence} from "react-scroll-hooks";
//
// export default function Example(items) {
//
//     const bottomRef = useRef();
//
//     const scrollToBottom = () => {
//         bottomRef.current.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         });
//     };
//     return (
//         <div className="autoscroll-container">
//             <button type="button" onClick={scrollToBottom}>
//                 Scroll To Bottom
//             </button>
//             <div className="scroll-list">
//                 {items &&
//                 items.map((item, index) => (
//                     <p key={index}>{`${index + 1}. ${item}`}</p>
//                 ))}
//                 <div ref={bottomRef} className="list-bottom"></div>
//             </div>
//         </div>
//     );
//
//     // const containerRef = React.useRef();
//     //
//     // const {createScrollRef, next, previous, goToPosition, active} = useScrollSequence({
//     //     initialActive: 2,
//     //     verticalOffset: 100,
//     //     scrollSpeed: 50,
//     //     containerRef
//     // });
//     //
//     // return (
//     //     <div ref={containerRef} style={{position: 'relative', overflow: 'scroll'}}>
//     //         <button onClick={() => next()}>next</button>
//     //         <button onClick={() => previous()}>previous</button>
//     //         <button onClick={() => goToPosition(2)}>Go To Position 2</button>
//     //         ...
//     //         <p {...createScrollRef()}>Position 0</p>
//     //         <p {...createScrollRef()}>Position 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
//     //             nihil, quos. A ad adipisci aliquam dicta doloremque exercitationem mollitia quidem vel voluptatum.
//     //             Accusamus accusantium delectus eaque earum eius esse est eveniet explicabo illum laborum, modi,
//     //             necessitatibus odit officiis provident ratione rem voluptatum. Alias at blanditiis consequuntur
//     //             cupiditate dolore doloremque eaque, expedita explicabo fugiat illum inventore laboriosam minima
//     //             molestias nostrum numquam, odit quaerat quidem quis quos, saepe sint temporibus voluptatem voluptatibus.
//     //             Est facere ipsum itaque minima modi porro sint tempora? Ab atque culpa doloribus earum esse eveniet
//     //             fugiat harum itaque laborum laudantium magni minus nam natus necessitatibus obcaecati optio quae quaerat
//     //             quas quibusdam quidem recusandae reprehenderit saepe, sed similique temporibus voluptatem voluptates.
//     //             Aperiam atque dicta, dolorem eaque esse est eveniet ex fugiat illo, impedit in incidunt laborum modi nam
//     //             nesciunt nostrum perferendis recusandae rem sequi ut vel veniam voluptates voluptatibus? Ab accusamus ad
//     //             alias beatae distinctio dolore doloremque doloribus eaque earum eligendi harum illo, iure laboriosam
//     //             magnam magni maxime minima molestias nobis nostrum odio possimus quis quisquam recusandae repellat
//     //             repudiandae rerum sapiente sit soluta totam unde velit veniam vero voluptatibus. Ab alias aliquam atque
//     //             eius exercitationem, iste iure nam quae qui quia repellat sint sit voluptate? Ad architecto aspernatur
//     //             assumenda debitis delectus dolorum ducimus eos eveniet exercitationem explicabo fuga fugiat iusto magni
//     //             nihil officiis optio quia, quis quod reiciendis rem repellat reprehenderit sit sunt ut veritatis vitae
//     //             voluptatem. Accusamus ad, consequuntur dolorum eius inventore iste magnam nihil non numquam optio
//     //             possimus quas qui sequi. A accusamus amet corporis cupiditate itaque nisi.</p>
//     //         <p {...createScrollRef()}>Position 2</p>
//     //     </div>
//     // )
//     // const containerRef = React.useRef();
//     // const elementRef = React.useRef();
//     // const scrollSpeed = 100;
//     //
//     // const {scrollToElement, scrollToY} = useScroll({scrollSpeed, containerRef})
//     //
//     // return (
//     //     <div ref={containerRef} style={{overflow: 'scroll'}}>
//     //         <button onClick={() => scrollToElement(elementRef)}>asdfasefqwe</button>
//     //         ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse exercitationem fugiat iste quam, quasi
//     //         quo recusandae. At consectetur dicta doloremque doloribus fugit maxime odio perferendis quam saepe sint,
//     //         tempora temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur esse
//     //         et, eum fugit inventore ipsa iusto quas quasi quisquam reiciendis repellendus repudiandae rerum sapiente,
//     //         soluta sunt, tempore vero. Alias facilis harum ipsa laudantium magni necessitatibus quae saepe, veritatis!
//     //         Aliquam architecto autem culpa dicta labore libero magni nihil officiis vel voluptatum. Accusantium aperiam
//     //         atque autem beatae consequatur, cumque dignissimos dolorem eaque ex harum hic incidunt laboriosam magnam,
//     //         maxime mollitia nemo nostrum pariatur possimus repellendus, saepe temporibus vitae voluptate? Accusamus eum
//     //         excepturi ipsam minus molestiae, non odit omnis quasi quis ratione tempore, vero. Eligendi eum excepturi
//     //         fugit molestias, quisquam tempora ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse exercitationem fugiat iste quam, quasi
//     //         quo recusandae. At consectetur dicta doloremque doloribus fugit maxime odio perferendis quam saepe sint,
//     //         tempora temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur esse
//     //         et, eum fugit inventore ipsa iusto quas quasi quisquam reiciendis repellendus repudiandae rerum sapiente,
//     //         soluta sunt, tempore vero. Alias facilis harum ipsa laudantium magni necessitatibus quae saepe, veritatis!
//     //         Aliquam architecto autem culpa dicta labore libero magni nihil officiis vel voluptatum. Accusantium aperiam
//     //         atque autem beatae consequatur, cumque dignissimos dolorem eaque ex harum hic incidunt laboriosam magnam,
//     //         maxime mollitia nemo nostrum pariatur possimus repellendus, saepe temporibus vitae voluptate? Accusamus eum
//     //         excepturi ipsam minus molestiae, non odit omnis quasi quis ratione tempore, vero. Eligendi eum excepturi
//     //         fugit molestias, quisquam tempora ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse exercitationem fugiat iste quam, quasi
//     //         quo recusandae. At consectetur dicta doloremque doloribus fugit maxime odio perferendis quam saepe sint,
//     //         tempora temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur esse
//     //         et, eum fugit inventore ipsa iusto quas quasi quisquam reiciendis repellendus repudiandae rerum sapiente,
//     //         soluta sunt, tempore vero. Alias facilis harum ipsa laudantium magni necessitatibus quae saepe, veritatis!
//     //         Aliquam architecto autem culpa dicta labore libero magni nihil officiis vel voluptatum. Accusantium aperiam
//     //         atque autem beatae consequatur, cumque dignissimos dolorem eaque ex harum hic incidunt laboriosam magnam,
//     //         maxime mollitia nemo nostrum pariatur possimus repellendus, saepe temporibus vitae voluptate? Accusamus eum
//     //         excepturi ipsam minus molestiae, non odit omnis quasi quis ratione tempore, vero. Eligendi eum excepturi
//     //         fugit molestias, quisquam tempora ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse exercitationem fugiat iste quam, quasi
//     //         quo recusandae. At consectetur dicta doloremque doloribus fugit maxime odio perferendis quam saepe sint,
//     //         tempora temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur esse
//     //         et, eum fugit inventore ipsa iusto quas quasi quisquam reiciendis repellendus repudiandae rerum sapiente,
//     //         soluta sunt, tempore vero. Alias facilis harum ipsa laudantium magni necessitatibus quae saepe, veritatis!
//     //         Aliquam architecto autem culpa dicta labore libero magni nihil officiis vel voluptatum. Accusantium aperiam
//     //         atque autem beatae consequatur, cumque dignissimos dolorem eaque ex harum hic incidunt laboriosam magnam,
//     //         maxime mollitia nemo nostrum pariatur possimus repellendus, saepe temporibus vitae voluptate? Accusamus eum
//     //         excepturi ipsam minus molestiae, non odit omnis quasi quis ratione tempore, vero. Eligendi eum excepturi
//     //         fugit molestias, quisquam tempora ullam?
//     //         <p ref={elementRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque autem consectetur
//     //             corporis cupiditate delectus deleniti deserunt doloribus ea eius eligendi enim eos est exercitationem
//     //             expedita explicabo fugiat, iure libero minus mollitia nesciunt nisi non obcaecati porro praesentium quam
//     //             quas quia quo quos repellat sequi soluta totam unde, voluptate voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque autem consectetur
//     //             corporis cupiditate delectus deleniti deserunt doloribus ea eius eligendi enim eos est exercitationem
//     //             expedita explicabo fugiat, iure libero minus mollitia nesciunt nisi non obcaecati porro praesentium quam
//     //             quas quia quo quos repellat sequi soluta totam unde, voluptate voluptatibus.</p>
//     //     </div>
//     // )
// }

// import React, { useEffect, useState } from 'react';
// const Example = props => {
//     const [user, setUser] = useState([]);
//     const [userLoaded, setUserLoaded] = useState(false);
//
//     const fetchUser = async () => {
//         try {
//             let response = await fetch('https://randomuser.me/api');
//             let json = await response.json();
//             return { success: true, data: json };
//         } catch (error) {
//             console.log(error);
//             return { success: false };
//         }
//     }
//     useEffect(() => {
//         (async () => {
//             setUserLoaded(false);
//             let res = await fetchUser();
//             if (res.success) {
//                 setUser(res.data.results[0]);
//                 setUserLoaded(true);
//             }
//         })();
//     }, []);
//     return (
//         <div>
//             {userLoaded ? (
//                 <div>
//                     <ul>
//                         <li><strong>First name:</strong> {user.name.first}</li>
//                         <li><strong>Last name:</strong> {user.name.last}</li>
//                         <li><strong>Email:</strong> {user.email}</li>
//                     </ul>
//                 </div>
//             ) : (
//                 <p>No user found, please try again</p>
//             )}
//         </div>
//     );
// }
// export default Example;
//
// import React, { useState } from 'react';
// // import './App.css';
// import LoadSpinner from './LoadingJs';
//
//
// function Example() {
//     const [isLoaded, setIsLoaded] = useState(true);
//
//     const handleIsLoadedToggle = () => {
//         setIsLoaded(currentIsLoaded => !currentIsLoaded)
//     };
//
//     return (
//         <div className="App">
//             <button onClick={handleIsLoadedToggle}>
//                 Toggle LoadSpinner
//             </button>
//
//             {isLoaded && <LoadSpinner />}
//         </div>
//     );
// }
//
// export default Example;
