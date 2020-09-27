import { Model } from "sequelize/types";

export class Conference extends Model {

}

Conference.init({
    conf_id: Number,
    name: string,
}, { sequelize, modelName: 'conference', freezeTableName: true })
