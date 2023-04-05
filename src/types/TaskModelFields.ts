export interface TaskModelFields {
	id: string;
	start: Date;
	end: Date;
	title: string;
	percentComplete: number;
    childrenTaskIds: string[];
  }