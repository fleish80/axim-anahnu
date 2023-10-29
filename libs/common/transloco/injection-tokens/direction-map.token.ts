import { InjectionToken } from "@angular/core";
import { DirectionType } from "../models/direction.type";

export const DIRECTION_MAP = new InjectionToken<Record<string, DirectionType>>('directions map');