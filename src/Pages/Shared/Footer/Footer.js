import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer'>
        <footer className="bg-dark text-center text-white">

            <div className="container p-4 pb-0">

                <section className="mb-4">

                    <a target='_blank'
                        className="btn   btn-floating m-1"

                        href="https://www.facebook.com/"
                        role="button" rel="noreferrer"
                    >
                        <img className='facebook' src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="img" />
                    </a>
                    <a target='_blank'
                        className="btn   btn-floating m-1"

                        href="https://www.facebook.com/"
                        role="button" rel="noreferrer"
                    >
                        <img className='insta' src="https://img.icons8.com/fluency/344/instagram-new.png" alt="img" />
                    </a>


                    <a target='_blank'
                        className="btn btn-floating m-1"

                        href="https://twitter.com/?lang=en"
                        role="button" rel="noreferrer"
                    >
                        <img className='twitter' src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png" alt="img" />
                    </a>


                    <a target='_blank'

                        className="btn   btn-floating m-1"

                        href="https://www.google.com/"
                        role="button" rel="noreferrer"
                    >
                        <img className='google' src="https://img.icons8.com/color/288/google-logo.png" alt="img" />
                    </a>


                    <a target='_blank'
                        className="btn   btn-floating m-1"

                        href="https://youtube.com/"
                        role="button" rel="noreferrer"
                    >
                        <img className='youtube' src="https://img.icons8.com/color/344/youtube-play.png" alt="img" />
                    </a>


                    <a target='_blank'
                        className="btn  btn-floating m-1"

                        href="https://github.com/"
                        role="button" rel="noreferrer"
                    >
                        <img className='github' src="https://img.icons8.com/plasticine/200/github.png" alt="img" />
                    </a>


                </section>

            </div>


            <div className="text-center p-3"  >
                Copyright: © {year}

            </div>

        </footer>

    </div>
    );
};

export default Footer;