import React from 'react';

const Content = () => {
    return ( 
    <>
    {/*<!-- One -->*/}
    <section id="one">
                <header className="major">
                    <h2>Ipsum lorem dolor aliquam ante commodo<br />
                    magna sed accumsan arcu neque.</h2>
                </header>
                <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                <ul className="actions">
                    <li><a href="#" className="button">Learn More</a></li>
                </ul>
            </section>

        {/*<!-- Two -->*/}
            <section id="two">
                <h2>Recent Work</h2>
                <div className="row">
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="images/fulls/01.jpg" className="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
                        <h3>Magna sed consequat tempus</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="images/fulls/02.jpg" className="image fit thumb"><img src="images/thumbs/02.jpg" alt="" /></a>
                        <h3>Ultricies lacinia interdum</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="images/fulls/03.jpg" className="image fit thumb"><img src="images/thumbs/03.jpg" alt="" /></a>
                        <h3>Tortor metus commodo</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="images/fulls/04.jpg" className="image fit thumb"><img src="images/thumbs/04.jpg" alt="" /></a>
                        <h3>Quam neque phasellus</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="images/fulls/05.jpg" className="image fit thumb"><img src="images/thumbs/05.jpg" alt="" /></a>
                        <h3>Nunc enim commodo aliquet</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="images/fulls/06.jpg" className="image fit thumb"><img src="images/thumbs/06.jpg" alt="" /></a>
                        <h3>Risus ornare lacinia</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                </div>
                <ul className="actions">
                    <li><a href="#" className="button">Full Portfolio</a></li>
                </ul>
            </section>

        {/*<!-- Three -->*/}
            <section id="three">
                <h2>Get In Touch</h2>
                <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                <div className="row">
                    <div className="col-8 col-12-small">
                        <form method="post" action="#">
                            <div className="row gtr-uniform gtr-50">
                                <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                            </div>
                        </form>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </div>
                    <div className="col-4 col-12-small">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                1234 Somewhere Rd.<br />
                                Nashville, TN 00000<br />
                                United States
                            </li>
                            <li>
                                <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                000-000-0000
                            </li>
                            <li>
                                <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                                <a href="#">hello@untitled.tld</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    </>
        );
}
 
export default Content;