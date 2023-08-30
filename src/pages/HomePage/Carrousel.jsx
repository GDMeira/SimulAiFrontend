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
import Post from './Post';
import questoes from './images/questoes.png';
import objetivo from './images/objetivo.png';
import desempenho from './images/desempenho.png';
import { pages } from '../../routes/routes';

export default function Carrousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const desktopPosts = [
        { title: 'Simulados em Física Médica', text: 'Mais de 5000 questões de 14 instituições que oferecem Residência em Física Médica. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image: undefined, button: 'COMEÇAR A AVALIAÇÃO GRATUITA', path: pages.signIn },
        { title: 'Escolha os temas das questões', text: 'Um dos maiores diferenciais do portal Física Médica Brasil é a possibilidade de escolher os temas das questões que deseja treinar como SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', image: questoes, button: '', path: '' },
        { title: 'Foco no objetivo', text: 'Selecione apenas questões das instituições e hospitais que tenha interesse. Nossos simulados tem  um banco de questões de mais de 10 instituições e, entre elas, HACC, HCUSP,  HSL, INCA, entre outras.', image: objetivo, button: '', path: '' },
        { title: 'Melhore seu desempenho', text: 'Com base no histórico de questões respondidas, veja quais temas ou instituições têm as menores assertividades. Assim, é crie simulados totalmente personalizados para melhorar seu desempenho.', image: desempenho, button: '', path: '' },
        { title: 'Prepare-se para a Prova de Residência', text: '', image: undefined, button: 'COMEÇAR A AVALIAÇÃO GRATUITA', path: '/LoginPage' }
    ];

    const mobilePosts = [
        { title: 'Simulados em Física Médica', text: 'Mais de 5000 questões de 14 instituições. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image: undefined, button: 'AVALIAÇÃO GRATUITA', path: pages.signIn },
        { title: 'Filtre os temas', text: 'SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', image: questoes, button: '', path: '' },
        { title: 'Foco no objetivo', text: 'Selecione apenas questões das instituições e hospitais que tenha interesse.', image: objetivo, button: '', path: '' },
        { title: 'Melhore seu desempenho', text: 'Histórico de questões com análises personalisadas.', image: desempenho, button: '', path: '' },
        { title: 'Prepare-se para a Prova de Residência', text: '', image: undefined, button: 'AVALIAÇÃO GRATUITA', path: '/LoginPage' }
    ];

    const isMobile = window.innerWidth < 1200;
    const posts = (isMobile ? mobilePosts : desktopPosts);

    return (
        <>
            <Swiper
                spaceBetween={30}
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
                {posts.map((post,i) => <SwiperSlide><Post key={i} post={post} position={i} /></SwiperSlide>)}

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
