export interface Setting {
    id: number;
    email: string;
    password: string;
};

/*export const SQL_CREATE_SETTINGS_TABLE: string = "CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR UNIQUE, password VARCHAR)";
export const SQL_BATCH_INSERT_INTO_SETTINGS_TABLE: string[] =[
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'key1', 'value1'); ",
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'key2', 'value2'); ",
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'keyX', 'valueX'); "
]*/
export const  SQL_SELECT_ALL_CREDENTIALS: string = `SELECT * FROM credentials`

export const  SQL_SELECT_ALL_SETTINGS: string = `SELECT * FROM settings`

export const  SQL_SELECT_ALL_EVENTS: string = `SELECT * FROM events`

export const  SQL_SELECT_ALL_ENUMS: string = `SELECT * FROM enum_masters`

export const  SQL_SELECT_ALL_HEALTH_DETAILS: string = `SELECT * FROM health_details`

export const  SQL_SELECT_ALL_USERS: string = `SELECT * FROM users`

export const  SQL_SELECT_ALL_EMERGENCY_DATA: string = `SELECT * FROM emergency_details`

export const  SQL_TABLES: any[] = ["emergency_details","enum_masters","events","health_details","users","user_associations"];

// export interface allergy_lists {
//     name: string;
//     created_at: Date;
//     updated_at: Date
// }

export interface emergency_details {
    id: number;
    emergency_id:number;
    contact_name: string;
    emergency_no : string;
    user_type: string;
    user_id: number;
    created_at: Date;
    updated_at: Date; 
};

export interface enum_masters {
    id: number;
    name: string;
    category_name : string;
    created_at: Date;
    updated_at: Date;
};

// export interface event_type_lists {
//     name: string;
//     created_at: Date;
//     updated_at: Date;
// };


export interface events {
    id: number;
    event_id: number;
    event_name: string;
    description: string;
    value: string;
    event_datetime: Date;
    event_type: string
    event_category: string;
    event_assets:any;
    event_options:any;
    user_id:number;
    sync: boolean;
    created_at: Date;
    updated_at: Date;
};

export interface health_details {
    id: number;
    health_id: number;
    name: string;
    attribute_name_value: any;
    user_id: number;
    created_at: Date;
    updated_at: Date;
};

// export interface report_types {
//     name: string;
//     created_at: Date;
//     updated_at: Date;
// };



export interface users {
    id: number;
    //userRecord_id: number;
    name: string;
    email: string;
    password: string,
    mobile_no: string;
    address: string;
    country: string;
    blood_group: string;
    age: number;
    user_uid: string;
    forgot_password_code: string;
    user_picture: any;
    active_status: boolean;
    role_id: number;
    created_at: Date;
    updated_at: Date;
    
};

export interface user_associations {
    id: number;
    patient_id: number;
    caregiver_id : number;
    nick_name: string; 
    created_at: string; 
    updated_at: string;
};





