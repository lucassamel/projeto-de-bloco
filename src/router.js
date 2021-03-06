import VueRouter from 'vue-router';
import Home from './components/Home'
import PontosTuristicos from './components/PontosTuristicos'
import OndeComer from './components/OndeComer'
import Sugestao from './components/Sugestao'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/pontos-turisticos',
            name: 'pontos-turisticos',
            component: PontosTuristicos
        },
        {
            path: '/onde-comer',
            name: 'onde-comer',
            component: OndeComer
        },
        {
            path: '/sugestao',
            name: 'sugestao',
            component: Sugestao
        },
      
    ]
});