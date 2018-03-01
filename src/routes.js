import Rules from './components/Rules.vue'
import Login from './components/Login.vue'
import Home from './components/HomeMenu.vue'
import Register from './components/Register.vue'
import HowToPlay from './components/HowToPlay.vue'
import GameLanding from './components/GameComponents/GameLanding.vue'
import GameCheckout from './components/GameComponents/GameCheckout.vue'
import GameCreditRecharge from './components/GameComponents/GameCreditRecharge.vue'
import GameStatistics from './components/GameComponents/GameStatistics.vue'
import GameHistory from './components/GameComponents/GameHistory.vue'
import BankData from './components/UserComponents/BankData.vue'
import PersonalDat from './components/UserComponents/PersonalDat.vue'


export const routes = [
    { path: '', component: Home },
    { path: '/reglas', component: Rules },
    { path: '/login', component: Login },
    { path: '/registro', component: Register },
    { path: '/comojugar', component: HowToPlay },
    { path: '/jugar', component: GameLanding },
    { path: '/recargar', component: GameCreditRecharge },
    { path: '/retirar', component: GameCheckout },
    { path: '/historiajuego', component: GameHistory },
    { path: '/estadisticas', component: GameStatistics },
    { path: '/datosBancarios', component: BankData },
    { path: '/datosBasicos', component: PersonalDat } 
]