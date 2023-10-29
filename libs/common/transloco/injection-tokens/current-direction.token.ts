import { InjectionToken } from "@angular/core";
import { DirectionType } from "../models/direction.type";

export const CURRENT_DIRECTION = new InjectionToken<DirectionType>('current direction');