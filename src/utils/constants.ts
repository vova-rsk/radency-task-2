interface ICategories { 
  [key: string]: string;
}

export const STATUS = {
  ACTIVE: 'active',
  ARCHIVED: 'archived',
};

export const HEAD_BUTTONS_TYPE = {
  CONTROL: 'control',
  AGREEMENT: 'agreement',
};

export const ROUTES = {
  ACTIVE: '/active-notes',
  ARCHIVE: '/archive',
};

export const TABLE_TYPE = {
  NOTES: 'notes table',
  SUMMARY: 'summary table',
};

export const TABLE_HEAD_CAPTIONS = [
  'icon',
  'name',
  'created',
  'category',
  'content',
  'dates',
];

export const OPERATION_TYPE = {
  ARCHIVE: 'archive',
  DELETE: 'remove',
};

export const CATEGORIES:ICategories = {
  TASK: 'Task',
  RANDOM_THOUGHT: 'Random Thought',
  IDEA: 'Idea',
  QUOTA: 'Quote',
};

export const NOTES_HEAD_CAPTIONS = [
  'icon',
  'names',
  'created',
  'category',
  'content',
  'dates',
];

export const SUMMARY_HEAD_CAPTIONS = [
  'icon',
  'note category',
  'active',
  'archived',
];
