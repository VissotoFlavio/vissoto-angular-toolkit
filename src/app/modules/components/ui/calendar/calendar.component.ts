import { Component, EventEmitter, OnInit } from '@angular/core';
import { Day, NotificationCalendar } from '@vissoto-angular/ui';

import { CalendarRequest } from '../../../../interfaces/components/ui/calendar.request';
import { EventsRequest } from '../../../../interfaces/components/events.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { UIServices } from '../../../../services/components/ui/ui.services';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(private uiServices: UIServices) {}

  date = new Date();
  currentDay = this.date.getDate();
  currentDayWeek = this.date.getDay();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();

  events: EventEmitter<NotificationCalendar[]> = new EventEmitter<NotificationCalendar[]>();
  daysEvent: NotificationCalendar[] = [];

  valuesPage: CalendarRequest = {} as CalendarRequest;

  componentName = 'Calendar';

  selectedDay: Day;
  selectedPlus: Day;

  ngOnInit(): void {
    this.notifications();

    this.getValuesPageRequest();
  }

  clickPlus(item: Day): void {
    this.selectedPlus = item;
  }

  clickDate(item: Day): void {
    this.selectedDay = item;
  }

  private generateNotificationCalendar(): NotificationCalendar {
    const numbernotifi = Math.floor(Math.random() * 10) <= 3;
    return {
      day: Math.floor(Math.random() * this.getLastDateOfMonth()),
      month: this.currentMonth,
      year: this.currentYear,
      countNotifications: numbernotifi ? Math.floor(Math.random() * 99).toString() : undefined,
    };
  }

  private getLastDateOfMonth(): number {
    return 32 - new Date(this.currentYear, this.currentMonth, 32).getDate();
  }

  private notifications(): void {
    this.daysEvent = [];
    for (let i = 0; i < 15; i++) {
      let eventValid = false;
      let notification: NotificationCalendar = {} as NotificationCalendar;

      while (!eventValid) {
        notification = this.generateNotificationCalendar();
        eventValid =
          this.daysEvent.findIndex((x) => x.day == notification.day && x.month == notification.month && x.year == notification.year) == -1;
      }
      this.daysEvent.push(notification);
    }
  }

  private getValuesPageRequest(): void {
    this.uiServices.getCalendarCodes().subscribe({
      next: (x: RequestDefault<CalendarRequest>) => {
        this.valuesPage = x.data;
        this.getEventsPage();
      },
    });
  }

  private getEventsPage(): void {
    this.uiServices.getEvents().subscribe({
      next: (x: RequestDefault<EventsRequest>) => {
        this.valuesPage.events = [];

        x.data.CustomEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
      },
    });
  }
}
