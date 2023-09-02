import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import subjects from './images/subjects.jpg';
import studying from './images/studying.jpg';
import target from './images/positioning1.png';
import performance from './images/enhanceResults.jpg';
import { pages } from '../../routes/routes';
import CardPost from './CardPost';

export default function Carrousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const desktopPosts = [
        { title: 'Escolha os temas das questões', text: 'Um dos maiores diferenciais do portal Física Médica Brasil é a possibilidade de escolher os temas das questões que deseja treinar como SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', path: '', bgImage: subjects },
        { title: 'Foco no objetivo', text: 'Selecione apenas questões das instituições e hospitais que tenha interesse. Nossos simulados tem  um banco de questões de mais de 10 instituições e, entre elas, HACC, HCUSP,  HSL, INCA, entre outras.', path: '', bgImage: target},
        { title: 'Melhore seu desempenho', text: 'Com base no histórico de questões respondidas, veja quais temas ou instituições têm as menores assertividades. Assim, é crie simulados totalmente personalizados para melhorar seu desempenho.', path: '', bgImage: performance },
        { title: 'Prepare-se para a Prova de Residência', text: '', path: pages.signIn, bgImage: studying }
    ];

    const mobilePosts = [
        { title: 'Filtre os temas', text: 'SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', path: '', bgImage: subjects, bgImage: subjects },
        { title: 'Foco no objetivo', text: 'Selecione apenas questões das instituições e hospitais que tenha interesse.', path: '', bgImage: target },
        { title: 'Melhore seu desempenho', text: 'Histórico de questões com análises personalisadas.', path: '', bgImage: performance },
        { title: 'Prepare-se para a Prova de Residência', text: '', path: pages.signIn, bgImage: studying }
    ];

    const isMobile = window.innerWidth < 1200;
    const posts = (isMobile ? mobilePosts : desktopPosts);

    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {posts.map((post,i) => <SwiperSlide key={i}><CardPost post={post} position={i} /></SwiperSlide>)}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
