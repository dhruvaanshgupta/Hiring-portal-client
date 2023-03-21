import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements AfterViewInit {
  @ViewChildren('accordionButton') accordionButtons: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.accordionButtons.forEach(button => {
      button.nativeElement.addEventListener('click', this.toggleAccordion);
    });
  }

  toggleAccordion = (event: MouseEvent) => {
    const targetButton = event.target as HTMLButtonElement;
    const itemToggle = targetButton.getAttribute('aria-expanded');

    this.accordionButtons.forEach(button => {
      button.nativeElement.setAttribute('aria-expanded', 'false');
    });

    if (itemToggle === 'false') {
      targetButton.setAttribute('aria-expanded', 'true');
    }
  };
}
