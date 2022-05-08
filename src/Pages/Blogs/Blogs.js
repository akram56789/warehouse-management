import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Difference between javascript and nodejs ?</h1>
                <p>
                    <h3>1. NodeJS :</h3>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <p>
                  <h3>     2. JavaScript :</h3>
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>
            </div>
            <div>
                <h1> Differences between sql and nosql databases ?</h1>
                <p>
                     <h3>SQL</h3>
                     <p>
                     SQL (pronounced “ess-que-el”) stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database. Some common relational database management systems that use SQL are: Oracle, Sybase, Microsoft SQL Server, Access, Ingres
                     </p>
                     <h3>NO SQL</h3>
                     <p>
                     NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads.
                     </p>
                     <h1>When should you use nodejs and when should you use mongodb ?</h1>
                     <h3> When should you use nodejs</h3>
                     <p>Node.js is a server-side JavaScript run-time environment. It's open-source, including Google's V8 engine, libuv for cross-platform compatibility, and a core library. Notably, Node.js does not expose a global "window" object, since it does not run within a browse</p>
                     <h3>when should you use mongodb</h3>
                     <p>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>

                </p>
            </div>
        </div>
    );
};

export default Blogs;