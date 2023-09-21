import { SubscriptionsService } from './subscriptions.service';
import { Subscription } from 'rxjs';

describe('SubscriptionsService', function () {
  let service: SubscriptionsService;

  beforeEach(function () {
    service = new SubscriptionsService();
  });

  it('should add subscription', function () {
    const subscription = new Subscription();
    service.next = subscription;

    expect(service['subscriptions']).toContain(subscription);
  });

  it('should unsubscribe from all subscriptions', function () {
    const subscriptions = [new Subscription(), new Subscription()];
    spyOn(subscriptions[0], 'unsubscribe');
    spyOn(subscriptions[1], 'unsubscribe');

    subscriptions.forEach(subscription => service.next = subscription);
    service.unsubscribeAll();

    expect(service['subscriptions'].length).toBe(0);
    expect(subscriptions[0].unsubscribe).toHaveBeenCalled();
    expect(subscriptions[1].unsubscribe).toHaveBeenCalled();
  });
});
