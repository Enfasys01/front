import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JoinGamePageComponent } from './pages/join-game-page/join-game-page.component';
import { NewGamePageComponent } from './pages/new-game-page/new-game-page.component';
import { GameConfigPageComponent } from './pages/game-config-page/game-config-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { WaitingPageComponent } from './pages/waiting-page/waiting-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'create', component: NewGamePageComponent, children:[
    {path: '', redirectTo:'config', pathMatch:'full'},
    {path: 'config', component: GameConfigPageComponent,},
    {path: 'user', component: UserPageComponent}
  ]},
  {path: 'join', component: JoinGamePageComponent},
  {path: 'game/:gameId', component:GamePageComponent, children:[
    {path: 'waiting', component: WaitingPageComponent},
    {path: 'play', component: PlayPageComponent},
  ]}
];
