import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SubscriptionsService {
    private subscriptions: Subscription[] = [];

    public set next(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    public unsubscribeAll(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());

        this.subscriptions = [];
    }

}
