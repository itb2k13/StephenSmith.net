import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTilesComponent } from './content-tiles.component';

describe('ContentTilesComponent', () => {
  let component: ContentTilesComponent;
  let fixture: ComponentFixture<ContentTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
