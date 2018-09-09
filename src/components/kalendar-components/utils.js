let today = new Date();
export default {
	getDayHours(type, day = new Date()) {
		let date = formatDate(day);
		let hours = day_hours;
		if(type === 'full') hours = day_full_hours;
		return hours.map(hour => `${date} ${hour}`);
	},
	isMobile() {
		let check = false;
		(function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	},
}

const formatDate = (date) => {
	let d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	month = month.padStart(2, '0');
	day = day.padStart(2, '0');

	return `${year}-${month}-${day}`; //;[year, month, day].join('-');
}

const day_full_hours = [
	"00:00:00",
	"01:00:00",
	"02:00:00",
	"03:00:00",
	"04:00:00",
	"05:00:00",
	"06:00:00",
	"07:00:00",
	"08:00:00",
	"09:00:00",
	"10:00:00",
	"11:00:00",
	"12:00:00",
	"13:00:00",
	"14:00:00",
	"15:00:00",
	"16:00:00",
	"17:00:00",
	"18:00:00",
	"19:00:00",
	"20:00:00",
	"21:00:00",
	"22:00:00",
	"23:00:00",
	"24:00:00"
];
const day_hours = [
	"00:00:00",
	"00:05:00",
	"00:10:00",
	"00:15:00",
	"00:20:00",
	"00:25:00",
	"00:30:00",
	"00:35:00",
	"00:40:00",
	"00:45:00",
	"00:50:00",
	"00:55:00",
	"01:00:00",
	"01:05:00",
	"01:10:00",
	"01:15:00",
	"01:20:00",
	"01:25:00",
	"01:30:00",
	"01:35:00",
	"01:40:00",
	"01:45:00",
	"01:50:00",
	"01:55:00",
	"02:00:00",
	"02:05:00",
	"02:10:00",
	"02:15:00",
	"02:20:00",
	"02:25:00",
	"02:30:00",
	"02:35:00",
	"02:40:00",
	"02:45:00",
	"02:50:00",
	"02:55:00",
	"03:00:00",
	"03:05:00",
	"03:10:00",
	"03:15:00",
	"03:20:00",
	"03:25:00",
	"03:30:00",
	"03:35:00",
	"03:40:00",
	"03:45:00",
	"03:50:00",
	"03:55:00",
	"04:00:00",
	"04:05:00",
	"04:10:00",
	"04:15:00",
	"04:20:00",
	"04:25:00",
	"04:30:00",
	"04:35:00",
	"04:40:00",
	"04:45:00",
	"04:50:00",
	"04:55:00",
	"05:00:00",
	"05:05:00",
	"05:10:00",
	"05:15:00",
	"05:20:00",
	"05:25:00",
	"05:30:00",
	"05:35:00",
	"05:40:00",
	"05:45:00",
	"05:50:00",
	"05:55:00",
	"06:00:00",
	"06:05:00",
	"06:10:00",
	"06:15:00",
	"06:20:00",
	"06:25:00",
	"06:30:00",
	"06:35:00",
	"06:40:00",
	"06:45:00",
	"06:50:00",
	"06:55:00",
	"07:00:00",
	"07:05:00",
	"07:10:00",
	"07:15:00",
	"07:20:00",
	"07:25:00",
	"07:30:00",
	"07:35:00",
	"07:40:00",
	"07:45:00",
	"07:50:00",
	"07:55:00",
	"08:00:00",
	"08:05:00",
	"08:10:00",
	"08:15:00",
	"08:20:00",
	"08:25:00",
	"08:30:00",
	"08:35:00",
	"08:40:00",
	"08:45:00",
	"08:50:00",
	"08:55:00",
	"09:00:00",
	"09:05:00",
	"09:10:00",
	"09:15:00",
	"09:20:00",
	"09:25:00",
	"09:30:00",
	"09:35:00",
	"09:40:00",
	"09:45:00",
	"09:50:00",
	"09:55:00",
	"10:00:00",
	"10:05:00",
	"10:10:00",
	"10:15:00",
	"10:20:00",
	"10:25:00",
	"10:30:00",
	"10:35:00",
	"10:40:00",
	"10:45:00",
	"10:50:00",
	"10:55:00",
	"11:00:00",
	"11:05:00",
	"11:10:00",
	"11:15:00",
	"11:20:00",
	"11:25:00",
	"11:30:00",
	"11:35:00",
	"11:40:00",
	"11:45:00",
	"11:50:00",
	"11:55:00",
	"12:00:00",
	"12:05:00",
	"12:10:00",
	"12:15:00",
	"12:20:00",
	"12:25:00",
	"12:30:00",
	"12:35:00",
	"12:40:00",
	"12:45:00",
	"12:50:00",
	"12:55:00",
	"13:00:00",
	"13:05:00",
	"13:10:00",
	"13:15:00",
	"13:20:00",
	"13:25:00",
	"13:30:00",
	"13:35:00",
	"13:40:00",
	"13:45:00",
	"13:50:00",
	"13:55:00",
	"14:00:00",
	"14:05:00",
	"14:10:00",
	"14:15:00",
	"14:20:00",
	"14:25:00",
	"14:30:00",
	"14:35:00",
	"14:40:00",
	"14:45:00",
	"14:50:00",
	"14:55:00",
	"15:00:00",
	"15:05:00",
	"15:10:00",
	"15:15:00",
	"15:20:00",
	"15:25:00",
	"15:30:00",
	"15:35:00",
	"15:40:00",
	"15:45:00",
	"15:50:00",
	"15:55:00",
	"16:00:00",
	"16:05:00",
	"16:10:00",
	"16:15:00",
	"16:20:00",
	"16:25:00",
	"16:30:00",
	"16:35:00",
	"16:40:00",
	"16:45:00",
	"16:50:00",
	"16:55:00",
	"17:00:00",
	"17:05:00",
	"17:10:00",
	"17:15:00",
	"17:20:00",
	"17:25:00",
	"17:30:00",
	"17:35:00",
	"17:40:00",
	"17:45:00",
	"17:50:00",
	"17:55:00",
	"18:00:00",
	"18:05:00",
	"18:10:00",
	"18:15:00",
	"18:20:00",
	"18:25:00",
	"18:30:00",
	"18:35:00",
	"18:40:00",
	"18:45:00",
	"18:50:00",
	"18:55:00",
	"19:00:00",
	"19:05:00",
	"19:10:00",
	"19:15:00",
	"19:20:00",
	"19:25:00",
	"19:30:00",
	"19:35:00",
	"19:40:00",
	"19:45:00",
	"19:50:00",
	"19:55:00",
	"20:00:00",
	"20:05:00",
	"20:10:00",
	"20:15:00",
	"20:20:00",
	"20:25:00",
	"20:30:00",
	"20:35:00",
	"20:40:00",
	"20:45:00",
	"20:50:00",
	"20:55:00",
	"21:00:00",
	"21:05:00",
	"21:10:00",
	"21:15:00",
	"21:20:00",
	"21:25:00",
	"21:30:00",
	"21:35:00",
	"21:40:00",
	"21:45:00",
	"21:50:00",
	"21:55:00",
	"22:00:00",
	"22:05:00",
	"22:10:00",
	"22:15:00",
	"22:20:00",
	"22:25:00",
	"22:30:00",
	"22:35:00",
	"22:40:00",
	"22:45:00",
	"22:50:00",
	"22:55:00",
	"23:00:00",
	"23:05:00",
	"23:10:00",
	"23:15:00",
	"23:20:00",
	"23:25:00",
	"23:30:00",
	"23:35:00",
	"23:40:00",
	"23:45:00",
	"23:50:00",
	"23:55:00",
	"24:00:00"
];