import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConfigPageComponent } from './game-config-page.component';

describe('GameConfigPageComponent', () => {
  let component: GameConfigPageComponent;
  let fixture: ComponentFixture<GameConfigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameConfigPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
