export interface Mission {
	flight_number: number;
	mission_name: string;
	launch_year: string;
	launch_success: boolean;
	details: string;
	launch_date_utc: string;
	static_fire_date_utc?: string;
	launch_failure_details?: {
	  reason: string;
	};
	launch_site: {
	  site_name_long: string;
	};
	rocket: {
	  rocket_name: string;
	  rocket_type: string;
	  first_stage: {
		cores: Array<{
		  core_serial: string;
		}>;
	  };
	  second_stage: {
		payloads: Array<{
		  payload_id: string;
		  payload_type: string;
		  orbit: string;
		}>;
	  };
	};
	links: {
	  article_link?: string;
	  wikipedia?: string;
	  video_link?: string;
	  mission_patch?: string;
	  mission_patch_small?: string;
	};
}
  