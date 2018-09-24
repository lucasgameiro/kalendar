import Vue from "vue";
import {format} from './date-formatter';

Vue.filter("normalizeDate", (date, format_type = 'YYYY-MM-DD') => format(date, format_type));
