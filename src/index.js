/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AbstractSetRemovalTimeDto from './model/AbstractSetRemovalTimeDto';
import ActivityInstanceDto from './model/ActivityInstanceDto';
import ActivityInstanceIncidentDto from './model/ActivityInstanceIncidentDto';
import ActivityStatisticsResultDto from './model/ActivityStatisticsResultDto';
import AtomLink from './model/AtomLink';
import AttachmentDto from './model/AttachmentDto';
import AttachmentDtoAllOf from './model/AttachmentDtoAllOf';
import AuthorizationExceptionDto from './model/AuthorizationExceptionDto';
import AuthorizationExceptionDtoAllOf from './model/AuthorizationExceptionDtoAllOf';
import BatchDto from './model/BatchDto';
import CaseDefinitionDto from './model/CaseDefinitionDto';
import CommentDto from './model/CommentDto';
import CommentDtoAllOf from './model/CommentDtoAllOf';
import CompleteExternalTaskDto from './model/CompleteExternalTaskDto';
import CompleteTaskDto from './model/CompleteTaskDto';
import CorrelationMessageDto from './model/CorrelationMessageDto';
import CountResultDto from './model/CountResultDto';
import DecisionDefinitionDto from './model/DecisionDefinitionDto';
import DecisionRequirementsDefinitionDto from './model/DecisionRequirementsDefinitionDto';
import DeleteHistoricProcessInstancesDto from './model/DeleteHistoricProcessInstancesDto';
import DeleteProcessInstancesDto from './model/DeleteProcessInstancesDto';
import DeploymentDto from './model/DeploymentDto';
import DeploymentDtoAllOf from './model/DeploymentDtoAllOf';
import DeploymentResourceDto from './model/DeploymentResourceDto';
import DeploymentWithDefinitionsDto from './model/DeploymentWithDefinitionsDto';
import DeploymentWithDefinitionsDtoAllOf from './model/DeploymentWithDefinitionsDtoAllOf';
import DurationReportResultDto from './model/DurationReportResultDto';
import EvaluationConditionDto from './model/EvaluationConditionDto';
import EventSubscriptionDto from './model/EventSubscriptionDto';
import EventSubscriptionQueryDto from './model/EventSubscriptionQueryDto';
import EventSubscriptionQueryDtoSorting from './model/EventSubscriptionQueryDtoSorting';
import ExceptionDto from './model/ExceptionDto';
import ExecutionDto from './model/ExecutionDto';
import ExtendLockOnExternalTaskDto from './model/ExtendLockOnExternalTaskDto';
import ExternalTaskBpmnError from './model/ExternalTaskBpmnError';
import ExternalTaskBpmnErrorAllOf from './model/ExternalTaskBpmnErrorAllOf';
import ExternalTaskDto from './model/ExternalTaskDto';
import ExternalTaskFailureDto from './model/ExternalTaskFailureDto';
import ExternalTaskQueryDto from './model/ExternalTaskQueryDto';
import ExternalTaskQueryDtoSorting from './model/ExternalTaskQueryDtoSorting';
import FetchExternalTaskTopicDto from './model/FetchExternalTaskTopicDto';
import FetchExternalTasksDto from './model/FetchExternalTasksDto';
import FormDto from './model/FormDto';
import HistoricActivityInstanceDto from './model/HistoricActivityInstanceDto';
import HistoricActivityInstanceQueryDto from './model/HistoricActivityInstanceQueryDto';
import HistoricActivityInstanceQueryDtoSorting from './model/HistoricActivityInstanceQueryDtoSorting';
import HistoricProcessInstanceDto from './model/HistoricProcessInstanceDto';
import HistoricProcessInstanceQueryDto from './model/HistoricProcessInstanceQueryDto';
import HistoricProcessInstanceQueryDtoSorting from './model/HistoricProcessInstanceQueryDtoSorting';
import HistoryTimeToLiveDto from './model/HistoryTimeToLiveDto';
import IdentityLinkDto from './model/IdentityLinkDto';
import IncidentDto from './model/IncidentDto';
import IncidentStatisticsResultDto from './model/IncidentStatisticsResultDto';
import LinkableDto from './model/LinkableDto';
import LockedExternalTaskDto from './model/LockedExternalTaskDto';
import MessageCorrelationResultWithVariableDto from './model/MessageCorrelationResultWithVariableDto';
import MetricsIntervalResultDto from './model/MetricsIntervalResultDto';
import MetricsResultDto from './model/MetricsResultDto';
import MissingAuthorizationDto from './model/MissingAuthorizationDto';
import ParseExceptionDto from './model/ParseExceptionDto';
import ParseExceptionDtoAllOf from './model/ParseExceptionDtoAllOf';
import PatchVariablesDto from './model/PatchVariablesDto';
import PriorityDto from './model/PriorityDto';
import ProblemDto from './model/ProblemDto';
import ProcessDefinitionDiagramDto from './model/ProcessDefinitionDiagramDto';
import ProcessDefinitionDto from './model/ProcessDefinitionDto';
import ProcessDefinitionStatisticsResultDto from './model/ProcessDefinitionStatisticsResultDto';
import ProcessDefinitionSuspensionStateDto from './model/ProcessDefinitionSuspensionStateDto';
import ProcessEngineDto from './model/ProcessEngineDto';
import ProcessInstanceDto from './model/ProcessInstanceDto';
import ProcessInstanceDtoAllOf from './model/ProcessInstanceDtoAllOf';
import ProcessInstanceModificationDto from './model/ProcessInstanceModificationDto';
import ProcessInstanceModificationInstructionDto from './model/ProcessInstanceModificationInstructionDto';
import ProcessInstanceQueryDto from './model/ProcessInstanceQueryDto';
import ProcessInstanceQueryDtoSorting from './model/ProcessInstanceQueryDtoSorting';
import ProcessInstanceSuspensionStateAsyncDto from './model/ProcessInstanceSuspensionStateAsyncDto';
import ProcessInstanceSuspensionStateDto from './model/ProcessInstanceSuspensionStateDto';
import ProcessInstanceWithVariablesDto from './model/ProcessInstanceWithVariablesDto';
import ProcessInstanceWithVariablesDtoAllOf from './model/ProcessInstanceWithVariablesDtoAllOf';
import RedeploymentDto from './model/RedeploymentDto';
import ResourceOptionsDto from './model/ResourceOptionsDto';
import ResourceReportDto from './model/ResourceReportDto';
import RestartProcessInstanceDto from './model/RestartProcessInstanceDto';
import RestartProcessInstanceModificationInstructionDto from './model/RestartProcessInstanceModificationInstructionDto';
import RetriesDto from './model/RetriesDto';
import SchemaLogEntryDto from './model/SchemaLogEntryDto';
import SchemaLogQueryDto from './model/SchemaLogQueryDto';
import SchemaLogQueryDtoSorting from './model/SchemaLogQueryDtoSorting';
import SetJobRetriesByProcessDto from './model/SetJobRetriesByProcessDto';
import SetRemovalTimeToHistoricProcessInstancesDto from './model/SetRemovalTimeToHistoricProcessInstancesDto';
import SetRemovalTimeToHistoricProcessInstancesDtoAllOf from './model/SetRemovalTimeToHistoricProcessInstancesDtoAllOf';
import SetRetriesForExternalTasksDto from './model/SetRetriesForExternalTasksDto';
import SetVariablesAsyncDto from './model/SetVariablesAsyncDto';
import SignalDto from './model/SignalDto';
import SortTaskQueryParametersDto from './model/SortTaskQueryParametersDto';
import StartProcessInstanceDto from './model/StartProcessInstanceDto';
import StartProcessInstanceFormDto from './model/StartProcessInstanceFormDto';
import SuspensionStateDto from './model/SuspensionStateDto';
import TaskBpmnErrorDto from './model/TaskBpmnErrorDto';
import TaskDto from './model/TaskDto';
import TaskEscalationDto from './model/TaskEscalationDto';
import TaskQueryDto from './model/TaskQueryDto';
import TaskQueryDtoSorting from './model/TaskQueryDtoSorting';
import TelemetryConfigurationDto from './model/TelemetryConfigurationDto';
import TransitionInstanceDto from './model/TransitionInstanceDto';
import TriggerVariableValueDto from './model/TriggerVariableValueDto';
import TriggerVariableValueDtoAllOf from './model/TriggerVariableValueDtoAllOf';
import UserCredentialsDto from './model/UserCredentialsDto';
import UserDto from './model/UserDto';
import UserIdDto from './model/UserIdDto';
import UserProfileDto from './model/UserProfileDto';
import VariableQueryParameterDto from './model/VariableQueryParameterDto';
import VariableValueDto from './model/VariableValueDto';
import VersionDto from './model/VersionDto';
import ConditionApi from './api/ConditionApi';
import DeploymentApi from './api/DeploymentApi';
import EngineApi from './api/EngineApi';
import EventSubscriptionApi from './api/EventSubscriptionApi';
import ExternalTaskApi from './api/ExternalTaskApi';
import HistoricActivityInstanceApi from './api/HistoricActivityInstanceApi';
import HistoricProcessInstanceApi from './api/HistoricProcessInstanceApi';
import IncidentApi from './api/IncidentApi';
import MessageApi from './api/MessageApi';
import MetricsApi from './api/MetricsApi';
import ProcessDefinitionApi from './api/ProcessDefinitionApi';
import ProcessInstanceApi from './api/ProcessInstanceApi';
import SchemaLogApi from './api/SchemaLogApi';
import SignalApi from './api/SignalApi';
import TaskApi from './api/TaskApi';
import TaskAttachmentApi from './api/TaskAttachmentApi';
import TaskCommentApi from './api/TaskCommentApi';
import TaskIdentityLinkApi from './api/TaskIdentityLinkApi';
import TaskLocalVariableApi from './api/TaskLocalVariableApi';
import TaskVariableApi from './api/TaskVariableApi';
import TelemetryApi from './api/TelemetryApi';
import UserApi from './api/UserApi';
import VersionApi from './api/VersionApi';


/**
* OpenApi_Spec_for_Camunda_BPM_REST_API_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CamundaBpmRestApi = require('index'); // See note below*.
* var xxxSvc = new CamundaBpmRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CamundaBpmRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new CamundaBpmRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CamundaBpmRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 7.14.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbstractSetRemovalTimeDto model constructor.
     * @property {module:model/AbstractSetRemovalTimeDto}
     */
    AbstractSetRemovalTimeDto,

    /**
     * The ActivityInstanceDto model constructor.
     * @property {module:model/ActivityInstanceDto}
     */
    ActivityInstanceDto,

    /**
     * The ActivityInstanceIncidentDto model constructor.
     * @property {module:model/ActivityInstanceIncidentDto}
     */
    ActivityInstanceIncidentDto,

    /**
     * The ActivityStatisticsResultDto model constructor.
     * @property {module:model/ActivityStatisticsResultDto}
     */
    ActivityStatisticsResultDto,

    /**
     * The AtomLink model constructor.
     * @property {module:model/AtomLink}
     */
    AtomLink,

    /**
     * The AttachmentDto model constructor.
     * @property {module:model/AttachmentDto}
     */
    AttachmentDto,

    /**
     * The AttachmentDtoAllOf model constructor.
     * @property {module:model/AttachmentDtoAllOf}
     */
    AttachmentDtoAllOf,

    /**
     * The AuthorizationExceptionDto model constructor.
     * @property {module:model/AuthorizationExceptionDto}
     */
    AuthorizationExceptionDto,

    /**
     * The AuthorizationExceptionDtoAllOf model constructor.
     * @property {module:model/AuthorizationExceptionDtoAllOf}
     */
    AuthorizationExceptionDtoAllOf,

    /**
     * The BatchDto model constructor.
     * @property {module:model/BatchDto}
     */
    BatchDto,

    /**
     * The CaseDefinitionDto model constructor.
     * @property {module:model/CaseDefinitionDto}
     */
    CaseDefinitionDto,

    /**
     * The CommentDto model constructor.
     * @property {module:model/CommentDto}
     */
    CommentDto,

    /**
     * The CommentDtoAllOf model constructor.
     * @property {module:model/CommentDtoAllOf}
     */
    CommentDtoAllOf,

    /**
     * The CompleteExternalTaskDto model constructor.
     * @property {module:model/CompleteExternalTaskDto}
     */
    CompleteExternalTaskDto,

    /**
     * The CompleteTaskDto model constructor.
     * @property {module:model/CompleteTaskDto}
     */
    CompleteTaskDto,

    /**
     * The CorrelationMessageDto model constructor.
     * @property {module:model/CorrelationMessageDto}
     */
    CorrelationMessageDto,

    /**
     * The CountResultDto model constructor.
     * @property {module:model/CountResultDto}
     */
    CountResultDto,

    /**
     * The DecisionDefinitionDto model constructor.
     * @property {module:model/DecisionDefinitionDto}
     */
    DecisionDefinitionDto,

    /**
     * The DecisionRequirementsDefinitionDto model constructor.
     * @property {module:model/DecisionRequirementsDefinitionDto}
     */
    DecisionRequirementsDefinitionDto,

    /**
     * The DeleteHistoricProcessInstancesDto model constructor.
     * @property {module:model/DeleteHistoricProcessInstancesDto}
     */
    DeleteHistoricProcessInstancesDto,

    /**
     * The DeleteProcessInstancesDto model constructor.
     * @property {module:model/DeleteProcessInstancesDto}
     */
    DeleteProcessInstancesDto,

    /**
     * The DeploymentDto model constructor.
     * @property {module:model/DeploymentDto}
     */
    DeploymentDto,

    /**
     * The DeploymentDtoAllOf model constructor.
     * @property {module:model/DeploymentDtoAllOf}
     */
    DeploymentDtoAllOf,

    /**
     * The DeploymentResourceDto model constructor.
     * @property {module:model/DeploymentResourceDto}
     */
    DeploymentResourceDto,

    /**
     * The DeploymentWithDefinitionsDto model constructor.
     * @property {module:model/DeploymentWithDefinitionsDto}
     */
    DeploymentWithDefinitionsDto,

    /**
     * The DeploymentWithDefinitionsDtoAllOf model constructor.
     * @property {module:model/DeploymentWithDefinitionsDtoAllOf}
     */
    DeploymentWithDefinitionsDtoAllOf,

    /**
     * The DurationReportResultDto model constructor.
     * @property {module:model/DurationReportResultDto}
     */
    DurationReportResultDto,

    /**
     * The EvaluationConditionDto model constructor.
     * @property {module:model/EvaluationConditionDto}
     */
    EvaluationConditionDto,

    /**
     * The EventSubscriptionDto model constructor.
     * @property {module:model/EventSubscriptionDto}
     */
    EventSubscriptionDto,

    /**
     * The EventSubscriptionQueryDto model constructor.
     * @property {module:model/EventSubscriptionQueryDto}
     */
    EventSubscriptionQueryDto,

    /**
     * The EventSubscriptionQueryDtoSorting model constructor.
     * @property {module:model/EventSubscriptionQueryDtoSorting}
     */
    EventSubscriptionQueryDtoSorting,

    /**
     * The ExceptionDto model constructor.
     * @property {module:model/ExceptionDto}
     */
    ExceptionDto,

    /**
     * The ExecutionDto model constructor.
     * @property {module:model/ExecutionDto}
     */
    ExecutionDto,

    /**
     * The ExtendLockOnExternalTaskDto model constructor.
     * @property {module:model/ExtendLockOnExternalTaskDto}
     */
    ExtendLockOnExternalTaskDto,

    /**
     * The ExternalTaskBpmnError model constructor.
     * @property {module:model/ExternalTaskBpmnError}
     */
    ExternalTaskBpmnError,

    /**
     * The ExternalTaskBpmnErrorAllOf model constructor.
     * @property {module:model/ExternalTaskBpmnErrorAllOf}
     */
    ExternalTaskBpmnErrorAllOf,

    /**
     * The ExternalTaskDto model constructor.
     * @property {module:model/ExternalTaskDto}
     */
    ExternalTaskDto,

    /**
     * The ExternalTaskFailureDto model constructor.
     * @property {module:model/ExternalTaskFailureDto}
     */
    ExternalTaskFailureDto,

    /**
     * The ExternalTaskQueryDto model constructor.
     * @property {module:model/ExternalTaskQueryDto}
     */
    ExternalTaskQueryDto,

    /**
     * The ExternalTaskQueryDtoSorting model constructor.
     * @property {module:model/ExternalTaskQueryDtoSorting}
     */
    ExternalTaskQueryDtoSorting,

    /**
     * The FetchExternalTaskTopicDto model constructor.
     * @property {module:model/FetchExternalTaskTopicDto}
     */
    FetchExternalTaskTopicDto,

    /**
     * The FetchExternalTasksDto model constructor.
     * @property {module:model/FetchExternalTasksDto}
     */
    FetchExternalTasksDto,

    /**
     * The FormDto model constructor.
     * @property {module:model/FormDto}
     */
    FormDto,

    /**
     * The HistoricActivityInstanceDto model constructor.
     * @property {module:model/HistoricActivityInstanceDto}
     */
    HistoricActivityInstanceDto,

    /**
     * The HistoricActivityInstanceQueryDto model constructor.
     * @property {module:model/HistoricActivityInstanceQueryDto}
     */
    HistoricActivityInstanceQueryDto,

    /**
     * The HistoricActivityInstanceQueryDtoSorting model constructor.
     * @property {module:model/HistoricActivityInstanceQueryDtoSorting}
     */
    HistoricActivityInstanceQueryDtoSorting,

    /**
     * The HistoricProcessInstanceDto model constructor.
     * @property {module:model/HistoricProcessInstanceDto}
     */
    HistoricProcessInstanceDto,

    /**
     * The HistoricProcessInstanceQueryDto model constructor.
     * @property {module:model/HistoricProcessInstanceQueryDto}
     */
    HistoricProcessInstanceQueryDto,

    /**
     * The HistoricProcessInstanceQueryDtoSorting model constructor.
     * @property {module:model/HistoricProcessInstanceQueryDtoSorting}
     */
    HistoricProcessInstanceQueryDtoSorting,

    /**
     * The HistoryTimeToLiveDto model constructor.
     * @property {module:model/HistoryTimeToLiveDto}
     */
    HistoryTimeToLiveDto,

    /**
     * The IdentityLinkDto model constructor.
     * @property {module:model/IdentityLinkDto}
     */
    IdentityLinkDto,

    /**
     * The IncidentDto model constructor.
     * @property {module:model/IncidentDto}
     */
    IncidentDto,

    /**
     * The IncidentStatisticsResultDto model constructor.
     * @property {module:model/IncidentStatisticsResultDto}
     */
    IncidentStatisticsResultDto,

    /**
     * The LinkableDto model constructor.
     * @property {module:model/LinkableDto}
     */
    LinkableDto,

    /**
     * The LockedExternalTaskDto model constructor.
     * @property {module:model/LockedExternalTaskDto}
     */
    LockedExternalTaskDto,

    /**
     * The MessageCorrelationResultWithVariableDto model constructor.
     * @property {module:model/MessageCorrelationResultWithVariableDto}
     */
    MessageCorrelationResultWithVariableDto,

    /**
     * The MetricsIntervalResultDto model constructor.
     * @property {module:model/MetricsIntervalResultDto}
     */
    MetricsIntervalResultDto,

    /**
     * The MetricsResultDto model constructor.
     * @property {module:model/MetricsResultDto}
     */
    MetricsResultDto,

    /**
     * The MissingAuthorizationDto model constructor.
     * @property {module:model/MissingAuthorizationDto}
     */
    MissingAuthorizationDto,

    /**
     * The ParseExceptionDto model constructor.
     * @property {module:model/ParseExceptionDto}
     */
    ParseExceptionDto,

    /**
     * The ParseExceptionDtoAllOf model constructor.
     * @property {module:model/ParseExceptionDtoAllOf}
     */
    ParseExceptionDtoAllOf,

    /**
     * The PatchVariablesDto model constructor.
     * @property {module:model/PatchVariablesDto}
     */
    PatchVariablesDto,

    /**
     * The PriorityDto model constructor.
     * @property {module:model/PriorityDto}
     */
    PriorityDto,

    /**
     * The ProblemDto model constructor.
     * @property {module:model/ProblemDto}
     */
    ProblemDto,

    /**
     * The ProcessDefinitionDiagramDto model constructor.
     * @property {module:model/ProcessDefinitionDiagramDto}
     */
    ProcessDefinitionDiagramDto,

    /**
     * The ProcessDefinitionDto model constructor.
     * @property {module:model/ProcessDefinitionDto}
     */
    ProcessDefinitionDto,

    /**
     * The ProcessDefinitionStatisticsResultDto model constructor.
     * @property {module:model/ProcessDefinitionStatisticsResultDto}
     */
    ProcessDefinitionStatisticsResultDto,

    /**
     * The ProcessDefinitionSuspensionStateDto model constructor.
     * @property {module:model/ProcessDefinitionSuspensionStateDto}
     */
    ProcessDefinitionSuspensionStateDto,

    /**
     * The ProcessEngineDto model constructor.
     * @property {module:model/ProcessEngineDto}
     */
    ProcessEngineDto,

    /**
     * The ProcessInstanceDto model constructor.
     * @property {module:model/ProcessInstanceDto}
     */
    ProcessInstanceDto,

    /**
     * The ProcessInstanceDtoAllOf model constructor.
     * @property {module:model/ProcessInstanceDtoAllOf}
     */
    ProcessInstanceDtoAllOf,

    /**
     * The ProcessInstanceModificationDto model constructor.
     * @property {module:model/ProcessInstanceModificationDto}
     */
    ProcessInstanceModificationDto,

    /**
     * The ProcessInstanceModificationInstructionDto model constructor.
     * @property {module:model/ProcessInstanceModificationInstructionDto}
     */
    ProcessInstanceModificationInstructionDto,

    /**
     * The ProcessInstanceQueryDto model constructor.
     * @property {module:model/ProcessInstanceQueryDto}
     */
    ProcessInstanceQueryDto,

    /**
     * The ProcessInstanceQueryDtoSorting model constructor.
     * @property {module:model/ProcessInstanceQueryDtoSorting}
     */
    ProcessInstanceQueryDtoSorting,

    /**
     * The ProcessInstanceSuspensionStateAsyncDto model constructor.
     * @property {module:model/ProcessInstanceSuspensionStateAsyncDto}
     */
    ProcessInstanceSuspensionStateAsyncDto,

    /**
     * The ProcessInstanceSuspensionStateDto model constructor.
     * @property {module:model/ProcessInstanceSuspensionStateDto}
     */
    ProcessInstanceSuspensionStateDto,

    /**
     * The ProcessInstanceWithVariablesDto model constructor.
     * @property {module:model/ProcessInstanceWithVariablesDto}
     */
    ProcessInstanceWithVariablesDto,

    /**
     * The ProcessInstanceWithVariablesDtoAllOf model constructor.
     * @property {module:model/ProcessInstanceWithVariablesDtoAllOf}
     */
    ProcessInstanceWithVariablesDtoAllOf,

    /**
     * The RedeploymentDto model constructor.
     * @property {module:model/RedeploymentDto}
     */
    RedeploymentDto,

    /**
     * The ResourceOptionsDto model constructor.
     * @property {module:model/ResourceOptionsDto}
     */
    ResourceOptionsDto,

    /**
     * The ResourceReportDto model constructor.
     * @property {module:model/ResourceReportDto}
     */
    ResourceReportDto,

    /**
     * The RestartProcessInstanceDto model constructor.
     * @property {module:model/RestartProcessInstanceDto}
     */
    RestartProcessInstanceDto,

    /**
     * The RestartProcessInstanceModificationInstructionDto model constructor.
     * @property {module:model/RestartProcessInstanceModificationInstructionDto}
     */
    RestartProcessInstanceModificationInstructionDto,

    /**
     * The RetriesDto model constructor.
     * @property {module:model/RetriesDto}
     */
    RetriesDto,

    /**
     * The SchemaLogEntryDto model constructor.
     * @property {module:model/SchemaLogEntryDto}
     */
    SchemaLogEntryDto,

    /**
     * The SchemaLogQueryDto model constructor.
     * @property {module:model/SchemaLogQueryDto}
     */
    SchemaLogQueryDto,

    /**
     * The SchemaLogQueryDtoSorting model constructor.
     * @property {module:model/SchemaLogQueryDtoSorting}
     */
    SchemaLogQueryDtoSorting,

    /**
     * The SetJobRetriesByProcessDto model constructor.
     * @property {module:model/SetJobRetriesByProcessDto}
     */
    SetJobRetriesByProcessDto,

    /**
     * The SetRemovalTimeToHistoricProcessInstancesDto model constructor.
     * @property {module:model/SetRemovalTimeToHistoricProcessInstancesDto}
     */
    SetRemovalTimeToHistoricProcessInstancesDto,

    /**
     * The SetRemovalTimeToHistoricProcessInstancesDtoAllOf model constructor.
     * @property {module:model/SetRemovalTimeToHistoricProcessInstancesDtoAllOf}
     */
    SetRemovalTimeToHistoricProcessInstancesDtoAllOf,

    /**
     * The SetRetriesForExternalTasksDto model constructor.
     * @property {module:model/SetRetriesForExternalTasksDto}
     */
    SetRetriesForExternalTasksDto,

    /**
     * The SetVariablesAsyncDto model constructor.
     * @property {module:model/SetVariablesAsyncDto}
     */
    SetVariablesAsyncDto,

    /**
     * The SignalDto model constructor.
     * @property {module:model/SignalDto}
     */
    SignalDto,

    /**
     * The SortTaskQueryParametersDto model constructor.
     * @property {module:model/SortTaskQueryParametersDto}
     */
    SortTaskQueryParametersDto,

    /**
     * The StartProcessInstanceDto model constructor.
     * @property {module:model/StartProcessInstanceDto}
     */
    StartProcessInstanceDto,

    /**
     * The StartProcessInstanceFormDto model constructor.
     * @property {module:model/StartProcessInstanceFormDto}
     */
    StartProcessInstanceFormDto,

    /**
     * The SuspensionStateDto model constructor.
     * @property {module:model/SuspensionStateDto}
     */
    SuspensionStateDto,

    /**
     * The TaskBpmnErrorDto model constructor.
     * @property {module:model/TaskBpmnErrorDto}
     */
    TaskBpmnErrorDto,

    /**
     * The TaskDto model constructor.
     * @property {module:model/TaskDto}
     */
    TaskDto,

    /**
     * The TaskEscalationDto model constructor.
     * @property {module:model/TaskEscalationDto}
     */
    TaskEscalationDto,

    /**
     * The TaskQueryDto model constructor.
     * @property {module:model/TaskQueryDto}
     */
    TaskQueryDto,

    /**
     * The TaskQueryDtoSorting model constructor.
     * @property {module:model/TaskQueryDtoSorting}
     */
    TaskQueryDtoSorting,

    /**
     * The TelemetryConfigurationDto model constructor.
     * @property {module:model/TelemetryConfigurationDto}
     */
    TelemetryConfigurationDto,

    /**
     * The TransitionInstanceDto model constructor.
     * @property {module:model/TransitionInstanceDto}
     */
    TransitionInstanceDto,

    /**
     * The TriggerVariableValueDto model constructor.
     * @property {module:model/TriggerVariableValueDto}
     */
    TriggerVariableValueDto,

    /**
     * The TriggerVariableValueDtoAllOf model constructor.
     * @property {module:model/TriggerVariableValueDtoAllOf}
     */
    TriggerVariableValueDtoAllOf,

    /**
     * The UserCredentialsDto model constructor.
     * @property {module:model/UserCredentialsDto}
     */
    UserCredentialsDto,

    /**
     * The UserDto model constructor.
     * @property {module:model/UserDto}
     */
    UserDto,

    /**
     * The UserIdDto model constructor.
     * @property {module:model/UserIdDto}
     */
    UserIdDto,

    /**
     * The UserProfileDto model constructor.
     * @property {module:model/UserProfileDto}
     */
    UserProfileDto,

    /**
     * The VariableQueryParameterDto model constructor.
     * @property {module:model/VariableQueryParameterDto}
     */
    VariableQueryParameterDto,

    /**
     * The VariableValueDto model constructor.
     * @property {module:model/VariableValueDto}
     */
    VariableValueDto,

    /**
     * The VersionDto model constructor.
     * @property {module:model/VersionDto}
     */
    VersionDto,

    /**
    * The ConditionApi service constructor.
    * @property {module:api/ConditionApi}
    */
    ConditionApi,

    /**
    * The DeploymentApi service constructor.
    * @property {module:api/DeploymentApi}
    */
    DeploymentApi,

    /**
    * The EngineApi service constructor.
    * @property {module:api/EngineApi}
    */
    EngineApi,

    /**
    * The EventSubscriptionApi service constructor.
    * @property {module:api/EventSubscriptionApi}
    */
    EventSubscriptionApi,

    /**
    * The ExternalTaskApi service constructor.
    * @property {module:api/ExternalTaskApi}
    */
    ExternalTaskApi,

    /**
    * The HistoricActivityInstanceApi service constructor.
    * @property {module:api/HistoricActivityInstanceApi}
    */
    HistoricActivityInstanceApi,

    /**
    * The HistoricProcessInstanceApi service constructor.
    * @property {module:api/HistoricProcessInstanceApi}
    */
    HistoricProcessInstanceApi,

    /**
    * The IncidentApi service constructor.
    * @property {module:api/IncidentApi}
    */
    IncidentApi,

    /**
    * The MessageApi service constructor.
    * @property {module:api/MessageApi}
    */
    MessageApi,

    /**
    * The MetricsApi service constructor.
    * @property {module:api/MetricsApi}
    */
    MetricsApi,

    /**
    * The ProcessDefinitionApi service constructor.
    * @property {module:api/ProcessDefinitionApi}
    */
    ProcessDefinitionApi,

    /**
    * The ProcessInstanceApi service constructor.
    * @property {module:api/ProcessInstanceApi}
    */
    ProcessInstanceApi,

    /**
    * The SchemaLogApi service constructor.
    * @property {module:api/SchemaLogApi}
    */
    SchemaLogApi,

    /**
    * The SignalApi service constructor.
    * @property {module:api/SignalApi}
    */
    SignalApi,

    /**
    * The TaskApi service constructor.
    * @property {module:api/TaskApi}
    */
    TaskApi,

    /**
    * The TaskAttachmentApi service constructor.
    * @property {module:api/TaskAttachmentApi}
    */
    TaskAttachmentApi,

    /**
    * The TaskCommentApi service constructor.
    * @property {module:api/TaskCommentApi}
    */
    TaskCommentApi,

    /**
    * The TaskIdentityLinkApi service constructor.
    * @property {module:api/TaskIdentityLinkApi}
    */
    TaskIdentityLinkApi,

    /**
    * The TaskLocalVariableApi service constructor.
    * @property {module:api/TaskLocalVariableApi}
    */
    TaskLocalVariableApi,

    /**
    * The TaskVariableApi service constructor.
    * @property {module:api/TaskVariableApi}
    */
    TaskVariableApi,

    /**
    * The TelemetryApi service constructor.
    * @property {module:api/TelemetryApi}
    */
    TelemetryApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VersionApi service constructor.
    * @property {module:api/VersionApi}
    */
    VersionApi
};
