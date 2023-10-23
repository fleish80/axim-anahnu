import {InjectionToken} from '@angular/core';
import {TransolocoSettings} from '../models/transoloco-settings.model';

export const TRANSLOCO_SETTINGS = new InjectionToken<TransolocoSettings>('transloco settings');
