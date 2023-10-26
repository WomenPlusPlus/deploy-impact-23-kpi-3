import {Body, Controller, Delete, Get, Param, Put} from '@nestjs/common';
import {MiscCirclesKpisService} from './misc-circles-kpis.service';
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';
import {KpiDto} from '../kpi/kpi.dto';

@Controller('misc-circles-kpis')
export class MiscCirclesKpisController {
	constructor(private service: MiscCirclesKpisService) {
	}
	@Get('fake')
	getFakeSample() {
		return this.service.fetchFakeSample();
	}
	@Get()
	getInitialSample(): Array<MiscCirclesKpisResponseDto> {
		return this.service.fetchInitialSample();
	}
	@Get('phone-calls')
	getPhoneCalls() {
		return this.service.fetchPhoneCalls();
	}
	@Get('tasks-join-members')
	getTasksJoinMembersRpc() {
		return this.service.fetchTasksJoinMembersRpc();
	}
	@Get('phone-calls-rpc-plsql')
	getPhoneCallsRpcPlSql() {
		return this.service.fetchPhoneCallsRpcPlSql();
	}
	@Get('evolution1')
	getEvolution() {
		return [
			{
				name: "Jan",
				uv: 6000,
				pv: 2400,
				amt: 2000
			},
			{
				name: "Feb",
				uv: 4000,
				pv: 2000,
				amt : 1800
			},
			{
				name : "Mar",
				uv : 3000,
				pv : 1200,
				amt : 1600
			},
			{
				name: "Apr",
				uv: 4200,
				pv: 1400,
				amt: 1000
			},
			{
				name: "May",
				uv: 5000,
				pv: 2200,
				amt : 1200
			},
			{
				name : "Jun",
				uv : 1000,
				pv : 2200,
				amt : 2600
			}
		];
	}
	@Get('phone-calls-rpc')
	getPhoneCallsRpc() {
		return this.service.fetchPhoneCallsRpc();
	}
	@Put('add-phone-call')
	addPhoneCall(@Body() data) {
		return this.service.insertPhoneCall(data);
	}
	@Delete('delete-phone-call/:id')
	removePhoneCall(@Param() param) {
		return this.service.deletePhoneCall(param.id);
	}
}
