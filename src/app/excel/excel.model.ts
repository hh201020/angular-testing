
const enum Type {
  'Feature',
  'Improvement',
  'Change',
  'Question',
  'Bug'
}

const enum Status {
  'Pending',
  'Processing',
  'Closed'
}

const enum Priority {
  'High',
  'Middle',
  'Low'
}

class CMSEventSession {
  constructor(
    public conversation?: string,
    public imageUrl?: Array<string>,
    public createdBy?: number,
    public dateCreated?: number,
  ) { }
}

export class CMSEvent {
  constructor(
    public name?: string,
    public event_id?: string,
    public priority?: Priority,
    public type?: Type,
    public status?: Status,
    public description?: string,
    public session?: Array<CMSEventSession>,
    public createdBy?: string,
    public dateCreated?: number,
    public dateModified?: number,
    public datePromised?: number,
    public dateClosed?: number,
  ) {
  }
}
