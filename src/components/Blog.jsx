import React from 'react';
import "../css/Blog.css";

const Blog = () => {
    return (
        <div>
              <div className='div'>
             <h1 className="main-brand">My First Food Blog</h1>
    <section className="row">
        <article className="story quarter">
            <h1 className="story-title">My Blogging Journey</h1>
            <p className="story-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta laboriosam fuga doloremque, sapiente omnis maiores quam fugit aspernatur? Cumque sequi dolore laboriosam repellat autem sapiente, a sint. Hic soluta ex unde vero quae labore nesciunt officia ducimus eaque velit?</p>
            <p className="story-text">Eveniet, rem voluptates! Velit iusto obcaecati a fugiat, error, ad cum commodi numquam officiis suscipit, soluta laboriosam. Ipsam, tempore beatae. Consequuntur quos odio eaque molestias dicta quae earum libero, beatae sit nihil, autem, reiciendis expedita fuga praesentium! Vero, ad magnam.</p>
        </article>

        <article className="story half">
            <h1 className="story-title">The Future is Here</h1>
            <p className="story-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed, fugiat minus dignissimos reiciendis voluptatem distinctio praesentium tenetur non at optio ratione ullam modi dolorem molestias aspernatur itaque expedita debitis voluptates dolore nemo maxime ipsa repellat magnam! Voluptatibus consequatur non ipsum repudiandae ipsa distinctio officiis natus nostrum animi, quam quibusdam?</p>

        </article>

        <article className="story quarter">
            <h1 className="story-title">Welcome to Food 101</h1>
            <p className="story-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta laboriosam fuga doloremque, sapiente omnis maiores quam fugit aspernatur? Cumque sequi dolore laboriosam repellat autem sapiente, a sint. Hic soluta ex unde vero quae labore nesciunt officia ducimus eaque velit?</p>
            <p className="story-text">Eveniet, rem voluptates! Velit iusto obcaecati a fugiat, error, ad cum commodi numquam officiis suscipit, soluta laboriosam. Ipsam, tempore beatae. Consequuntur quos odio eaque molestias dicta quae earum libero, beatae sit nihil, autem, reiciendis expedita fuga praesentium! Vero, ad magnam.</p>
        </article>
    </section>

    <section className="row">
        <article className="story quarter">
            <h1 className="story-title">Dieting Made Easy</h1>
            <p className="story-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta laboriosam fuga doloremque, sapiente omnis maiores quam fugit aspernatur? Cumque sequi dolore laboriosam repellat autem sapiente, a sint. Hic soluta ex unde vero quae labore nesciunt officia ducimus eaque velit?</p>
            <p className="story-text">Eveniet, rem voluptates! Velit iusto obcaecati a fugiat, error, ad cum commodi numquam officiis suscipit, soluta laboriosam. Ipsam, tempore beatae. Consequuntur quos odio eaque molestias dicta quae earum libero, beatae sit nihil, autem, reiciendis expedita fuga praesentium! Vero, ad magnam.</p>
        </article>
        <ul className="nav-list three-quarter">
            <li className="nav-item">
                <a href="#"> Healthy Lifestyle </a>
            </li>
            <li className="nav-item">
                <a href="#">Wellness Hack </a>
            </li>
            <li className="nav-item">
                <a href="#">Technology </a>
            </li>
            <li className="nav-item">
                <a href="#">The Best Food Recipes </a>
            </li>
            <li className="nav-item">
                <a href="#">Fashion </a>
            </li>
        </ul>
    </section>
        </div>
        </div>
      
    );
}

export default Blog;
