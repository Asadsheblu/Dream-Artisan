import React from 'react';
import authentication from "../../../images/Authentication_vs_Authorization.png"
import firebaseImg from "../../../images/image00.png"
const Blog = () => {
    return (
        <div className='container'>
            <h4>Difference between authorization and authentication</h4>
            <h6>Ans:</h6>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={authentication} alt="" />
                </div>
                <div className="col-md-6 pt-5">
                    <ol>
                        <li>
                        Authentication is the process Of verifying who Someone.And  Authorazation is the process of verifying what specific data user access.
                        </li>
                        <li>
                        Authentication is partialy changeable by user And Authorazation is not changeable user.
                        </li>
                        <li>
                    Using Authentication give access identity.And Authorazation always takes place after authentication
                        </li>
                    </ol>
                </div>
            </div>
          
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={firebaseImg} alt="" />
                </div>
                <div className="col-md-6 pt-5">
                    <h6>Why are you using firebase?</h6>
                    <h5>Ans:</h5>
                    <p>I am using firebase for Authentication and Authorazation for My website.Beacuse firebase give me Free Authentication system and also firebase managed all  data  real time in the database.i Can Host   My Website in firebase without Cost.  </p>
                    <h6>What other options do you have to implement authentication??</h6>
                    <h5>Ans:</h5>
                    <p>Basicaly many Kinds of Web managment company active authentication by user name ,enail,password System.
                        But Other way to authentication system active for our Web Application such as fingerpints,cards,voice recongnization,retina scan ans certificated-based authentication etc.  </p>
                   
                </div>
            </div>
            <div className="row">
                <h6>What other services does firebase provide other than authentication?</h6>
                <h5>Ans:</h5>
                <div className="col-md-6">
                    <img className="img-fluid" src={firebaseImg} alt="" />
                </div>
                <div className="col-md-6 pt-5">
                    <ol>
                    
                        <li>
                   Hosting
                        </li>
                        <li>
                   Cloud fireStore
                        </li>
                        <li>
                   Cloud Function
                        </li>
                        <li>
                        Cloud Storage
                        </li>
                        <li>
                        Cloud Messaging
                        </li>
                        <li>
                       Goggle Analyics
                        </li>
                        <li>
                        Predictions..etc.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blog;