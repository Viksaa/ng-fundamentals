import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        if (value === 1) return 'Half Hour';
        else if (value === 2) return 'One Hour';
        else if (value === 3) return 'Half Day';
        else if (value === 4) return 'Full Day';

        return value.toString();
    }
}
