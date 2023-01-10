import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/jamaludeenm/shop-cart"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/jamaludeenm/shop-cart
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://github.com/jamaludeenm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Jamal Deen
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;