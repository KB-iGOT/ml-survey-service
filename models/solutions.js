module.exports = {
  name: "solutions",
  schema: {
    externalId: {
      type: String,
      index: true,
      unique: true
    },
    isReusable: Boolean,
    name: String,
    description: String,
    author: String,
    parentSolutionId: "ObjectId",
    resourceType: Array,
    language: Array,
    keywords: Array,
    concepts: Array,
    createdFor: Array,
    scoringSystem: String,
    levelToScoreMapping: Object,
    themes: Array,
    flattenedThemes : Array,
    questionSequenceByEcm: Object,
    entityTypeId: "ObjectId",
    entityType: String,
    type: {
      type: String,
      required: true,
      index: true
    },
    subType: {
      type: String,
      required: true,
      index: true
    },
    entities: Array,
    programId: {
      type: "ObjectId",
      index: true
    },
    programExternalId: {
      type: String,
      index: true
    },
    programName: String,
    programDescription: String,
    entityProfileFieldsPerEntityTypes: Object,
    startDate: Date,
    endDate: Date,
    status: String,
    evidenceMethods: Object,
    sections: Object,
    registry: Array,
    frameworkId: "ObjectId",
    frameworkExternalId: String,
    parentSolutionId: "ObjectId",
    noOfRatingLevels: Number,
    isRubricDriven: { type : Boolean, default: false },
    enableQuestionReadOut: { type : Boolean, default: false },
    isReusable: Boolean,
    roles: Object,
    observationMetaFormKey: String,
    updatedBy: String,
    captureGpsLocationAtQuestionLevel:{ type : Boolean, default: false },
    sendSubmissionRatingEmailsTo: String,
    creator: String,
    linkTitle: String,
    linkUrl: String,
    link: {
      type: String,
      index: true
    },
    isAPrivateProgram : {
      default : false,
      type : Boolean
    },
    assessmentMetaFormKey : String,
    allowMultipleAssessemts : {
      default : false,
      type : Boolean
    },
    isDeleted: {
        default : false,
        type : Boolean
    },
    rootOrganisations : {
      type : [String],
      default : []
    },
    link: {
      type: String,
      index: true,
      unique: true
    },
    project : Object,
    referenceFrom : String,
    projectTemplateId : {
      type : "ObjectId",
      index: true
    }
  }
};