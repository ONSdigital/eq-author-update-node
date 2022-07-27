import React from "react";
// import logo from "./logo.svg";
import "App.css";

import Accordion from "components/Accordion";
import AliasEditor from "components/AliasEditor";

// ** AnswerContent
// ** --------------
import AdvancedProperties from "components/AnswerContent/AdvancedProperties";
import CheckboxProperties from "components/AnswerContent/AnswerProperties/CheckboxProperties";
import DateProperties from "components/AnswerContent/AnswerProperties/DateProperties";
import DateRangeProperties from "components/AnswerContent/AnswerProperties/DateRangeProperties";
import DurationProperties from "components/AnswerContent/AnswerProperties/DurationProperties";
import AnswerProperties from "components/AnswerContent/AnswerProperties";
import NumberProperties from "components/AnswerContent/AnswerProperties/NumberProperties";
import RadioProperties from "components/AnswerContent/AnswerProperties/RadioProperties";
import TextAreaProperties from "components/AnswerContent/AnswerProperties/TextAreaProperties";
import TextFieldProperties from "components/AnswerContent/AnswerProperties/TextFieldProperties";
import UnitProperties from "components/AnswerContent/AnswerProperties/UnitProperties";
import Decimal from "components/AnswerContent/Decimal";
import Fallback from "components/AnswerContent/FallbackProperty/Fallback";
import InlineField from "components/AnswerContent/Format/InlineField";
import MultiLineField from "components/AnswerContent/Format/MultiLineField";
// ! Broken - uses a scene file to be refactored and added later in development
// import MutuallyExclusive from "components/AnswerContent/MutuallyExclusive";
import Required from "components/AnswerContent/Required";
// ** --------------

import AnswerPicker from "components/AnswerPicker";

// ** AnswerTypeSelector
// ** --------------
import AnswerTypeButton from "components/AnswerTypeSelector/AnswerTypeButton";
import AnswerTypeGrid from "components/AnswerTypeSelector/AnswerTypeGrid";
import AnswerTypeSelector from "components/AnswerTypeSelector";
import PopupTransition from "components/AnswerTypeSelector/PopupTransition";
// ** --------------

// ** buttons
// ** --------------
import Button from "components/buttons/Button";
import LinkButton from "components/buttons/Button/LinkButton";
import RouteButton from "components/buttons/Button/RouteButton";
import ButtonGroup from "components/buttons/ButtonGroup";
import CloseButton from "components/buttons/CloseButton";
import DeleteButton from "components/buttons/DeleteButton";
import DuplicateButton from "components/buttons/DuplicateButton";
import IconButton from "components/buttons/IconButton";
import IconButtonDelete from "components/buttons/IconButtonDelete";
import MoveButton from "components/buttons/MoveButton";
import MovePageButton from "components/buttons/MovePageButton";
import SidebarButton from "components/buttons/SidebarButton";
import Dropdown from "components/buttons/SplitButton/Dropdown";
import SplitButton from "components/buttons/SplitButton";
import MenuButton from "components/buttons/SplitButton/MenuButton";
import MenuItem from "components/buttons/SplitButton/MenuItem";
import TextButton from "components/buttons/TextButton";
import ToggleChip from "components/buttons/ToggleChip";
import ToggleSwitch from "components/buttons/ToggleSwitch";
// ** --------------

// ! Broken - Auth uses config
// import Auth from "components/Auth";

import { Autocomplete } from "components/Autocomplete";
import Badge from "components/Badge";
import BaseTabs from "components/BaseTabs";
import CharacterCounter from "components/CharacterCounter";
import Collapsible from "components/Collapsible";
import CollapsibleMoveable from "components/CollapsibleMoveable";
import CollapsibleNavItem from "components/CollapsibleNavItem";
import CollapsibleToggled from "components/CollapsibleToggled";

// ** Comments
// ** --------------
// ! Broken - Comment uses MeContext, which causes an error due to using config
// import Comment from "components/Comments/Comment";
import CommentEditor from "components/Comments/CommentEditor";
import CommentHighlight from "components/Comments/CommentHighlight";
import CommentNotification from "components/Comments/CommentNotification";
// ** --------------

import ContentContainer from "components/ContentContainer";
import ContentPickerSelect from "components/ContentPickerSelect";

// ** ContentPickerv2
// ** --------------
import AnswerPickerv2 from "components/ContentPickerv2/AnswerPicker";
import { ErrorMessage } from "components/ContentPickerv2/ErrorMessage";
import ContentPickerv2 from "components/ContentPickerv2";
import {
  FlatSectionMenu,
  Menu as MenuContentPickerv2,
  MenuItem as MenuItemContentPickerv2,
  MenuItemList,
  MenuItemSubtitle,
  MenuItemTitle,
  MenuItemTitles,
  MenuItemType,
  ParentMenuItem,
  SectionTitle,
  SubMenu,
  SubMenuItem,
} from "components/ContentPickerv2/Menu";
import MetaDataPicker from "components/ContentPickerv2/MetadataPicker";
import Options from "components/ContentPickerv2/Options";
import SectionMenu from "components/ContentPickerv2/SectionMenu";
import VariablePicker from "components/ContentPickerv2/VariablePicker";
import DestinationPicker from "components/ContentPickerv2/DestinationPicker";
import DestinationPickerMenu from "components/ContentPickerv2/DestinationPicker/Menu";
// ** --------------

import DeleteConfirmDialog from "components/DeleteConfirmDialog";

// ** Dialog
// ** --------------
import Dialog from "components/Dialog";
import { DialogAlert, DialogAlertList } from "components/Dialog/DialogAlert";
import DialogActionButtons from "components/Dialog/DialogButtons";
import DialogHeader from "components/Dialog/DialogHeader";
import DialogIcon from "components/Dialog/DialogIcon";
import DialogMessage from "components/Dialog/DialogMessage";
// ** --------------

// ** Forms
// ** --------------
import {
  Form,
  Label,
  Input,
  Select,
  TextArea,
  Field,
  Number,
  WrappingInput,
  Typeahead,
  Tooltip,
} from "components/Forms";
// ** --------------

import { Column, Grid } from "components/Grid";
import { IconGrid, IconGridButton } from "components/IconGrid";
import IconText from "components/IconText";
import MainCanvas from "components/MainCanvas";

// ** Modals
// ** --------------
import ConfirmationModal from "components/modals/ConfirmationModal";
import ImportContentModal from "components/modals/ImportContentModal";
import ImportQuestionReviewModal from "components/modals/ImportQuestionReviewModal";
import ImportSectionReviewModal from "components/modals/ImportSectionReviewModal";
import Modal from "components/modals/Modal";
import ModalDialog from "components/modals/ModalDialog";
import ModalWithNav from "components/modals/ModalWithNav";
import TabList from "components/modals/ModalWithNav/Tabs/TabList";
import ContentWrapper from "components/modals/ModalWithNav/Tabs/ContentWrapper";
import Tabs from "components/modals/ModalWithNav/Tabs";
import { useQuestionnaireLockingModal } from "components/modals/QuestionnaireLockingModal";
import QuestionnaireSelectModal from "components/modals/QuestionnaireSelectModal";
import Wizard from "components/modals/Wizard";
// ** --------------

import NoSearchResults from "components/NoSearchResults";

// ** Panels
// ** --------------
import ErrorPanel from "components/Panel/ErrorPanel";
import { Panel, InformationPanel } from "components/Panel";
// ** --------------

import ScaleTransition from "components/Popout/ScaleTransition";
import Popout from "components/Popout";
import QuestionnaireContext from "components/QuestionnaireContext";
import QuestionnaireSettingsModal from "components/QuestionnaireSettingsModal";
import QuestionnaireMeta from "components/QuestionnaireSettingsModal/QuestionnaireMeta";
import ScrollPane from "components/ScrollPane";
import SearchBar from "components/SearchBar";

// ** transitions
// ** --------------
import BounceTransition from "components/transitions/BounceTransition";
import ExpansionTransition from "components/transitions/ExpansionTransition";
import FadeTransition from "components/transitions/FadeTransition";
import SlideTransition from "components/transitions/SlideTransition";
// ** --------------

import Truncated from "components/Truncated";
// ! Broken - UserProfile uses MeContext, which causes an error due to using config
// import UserProfile from "components/UserProfile";
import ValidationError from "components/ValidationError";
import VisuallyHidden from "components/VisuallyHidden";
import withEntityEditor from "components/withEntityEditor";

// ** ImportContentQuestionnairesView
// ** --------------
import QuestionnairesView from "components/ImportContentQuestionnairesView";
import NoResults from "components/ImportContentQuestionnairesView/NoResults";
import NoResultsFiltered from "components/ImportContentQuestionnairesView/NoResultsFiltered";
import reducer from "components/ImportContentQuestionnairesView/reducer";
// TODO: ESLint expects default export to be an arrow function in this file
import usePersistedReducer from "components/ImportContentQuestionnairesView/usePersistedReducer";
import AccessFilter from "components/ImportContentQuestionnairesView/Header/AccessFilter";
import Header from "components/ImportContentQuestionnairesView/Header";
import PaginationNavTable from "components/ImportContentQuestionnairesView/PaginationNav";
import Pagination from "components/ImportContentQuestionnairesView/PaginationNav/PaginationNav";
import QuestionnairesTable from "components/ImportContentQuestionnairesView/QuestionnairesTable";
// ** --------------

// ** BaseLayout
// ** --------------
// TODO: Currently these do not work, missing constants/publishStatus
// import BaseLayout from "components/BaseLayout";
// import PermissionsBanner from "components/BaseLayout/PermissionsBanner";
// ** --------------

// ** datatable
// ** --------------
import {
  AddRowButton,
  DeleteRowButton,
  TableInput,
  TableInputDate,
  TableSelect,
  TableTypeaheadInput,
  TableTypeaheadMenu,
} from "components/datatable/Controls";
import {
  Table,
  TableBody,
  TableColumn,
  TableFoot,
  TableHead,
  TableHeadColumn,
  TableRow,
} from "components/datatable/Elements";
// ** --------------

import Delay from "components/Delay";
import DescribedText from "components/DescribedText";

// ** EditorLayout
// ** --------------
// ! Broken - EditorLayout uses MeContext, which causes an error due to using config
// import EditorLayout from "components/EditorLayout";

// TODO: Currently does not work, missing utils/urlUtils
// import EditorLayoutTabs from "components/EditorLayout/Tabs";

// TODO: Currently does not work, missing utils/timer
// import EditorLayoutHeader from "components/EditorLayout/Header";
import PageTitle from "components/EditorLayout/Header/PageTitle";
// ** --------------

// TODO: Currently does not work, missing App/page/Design/MoveEntityModal and App/page/Design/EditorToolbar
// import EditorToolbar from "components/EditorToolbar";

import Error from "components/Error";

// TODO: Currently does not work, missing components-themed/Label, components-themed/panels and components-themed/Toolkit
// import InputWithConditionalError from "components/InputWithConditionalError";

// ** ItemSelectModal
// ** --------------
import ItemSelectModal from "components/ItemSelectModal";
import ItemSelect from "components/ItemSelectModal/ItemSelect";
import PlainModal from "components/ItemSelectModal/PlainModal";
// ** --------------

// TODO: Currently does not work, fixing the error in BaseLayout will fix this
// import Layout from "components/Layout";
import Link from "components/Link";
import Loading from "components/Loading";
import Logo from "components/Logo";
import MoveModal from "components/MoveModal";
// TODO: Currently does not work, missing hooks/useCreateQuestionPage and hooks/useCreateFolder
// import {
//   defaultCallbacks,
//   CallbackContextProvider,
//   useNavigationCallbacks,
//   useSetNavigationCallbacks,
//   useSetNavigationCallbacksForPage,
// } from "components/NavigationCallbacks/NavigationCallbacks";
import NavItem from "components/NavItem";
import OfflineBanner from "components/OfflineBanner";
import PillTabs from "components/PillTabs";
import PositionModal from "components/PositionModal";

// ** preview
// ** --------------
import {
  Label as PreviewLabel,
  Input as PreviewInput,
  Field as PreviewField,
  UnitInput as PreviewUnitInput,
} from "components/preview/Answers/elements";
import AnswerTrailingUnit from "components/preview/Answers/AnswerTrailingUnit";
import CurrencyAnswer from "components/preview/Answers/CurrencyAnswer";
import DateAnswer from "components/preview/Answers/DateAnswer";
import DateRangeAnswer from "components/preview/Answers/DateRangeAnswer";
import DurationAnswer from "components/preview/Answers/DurationAnswer";
import MultipleChoiceAnswer from "components/preview/Answers/MultipleChoiceAnswer";
import TextAnswer from "components/preview/Answers/TextAnswer";
import TextAreaAnswer from "components/preview/Answers/TextAreaAnswer";
import { Answer, answerComponents } from "components/preview/Answers";
import Info from "components/preview/elements/Info";
import PreviewPageTitle from "components/preview/elements/PageTitle";
import PreviewError from "components/preview/Error";
// ** --------------

import QCodeContext from "components/QCodeContext";

// ** QuestionPicker
// ** --------------
import QuestionPicker from "components/QuestionPicker";
import Item from "components/QuestionPicker/Item";
import List from "components/QuestionPicker/List";
import SelectedPages from "components/QuestionPicker/SelectedPagesContext";
// ** --------------

import {
  RadioField,
  RadioLabel,
  RadioTitle,
  RadioDescription,
} from "components/Radio";
// TODO: Currently does not work, missing utils/UrlUtils
// import RedirectRoute from "components/RedirectRoute";
// TODO: Currently does not work, missing utils/getIdForObject
// import Reorder from "components/Reorder";

// ** RichTextEditor
// ** --------------
import PipedValue from "components/RichTextEditor/entities/PipedValue";
import LinkPlugin from "components/RichTextEditor/LinkPlugin";
import LinkPluginToolbarButton from "components/RichTextEditor/LinkPlugin/ToolbarButton";
// TODO: Currently does not work, missing utils/getContentBeforeEntity
// import RichTextEditor from "components/RichTextEditor";
// TODO: Currently does not work, missing utils/getContentBeforeEntity
// import PipingMenu from "components/RichTextEditor/PipingMenu";
// TODO: Currently does not work, missing utils/getContentBeforeEntity
// import Toolbar from "components/RichTextEditor/Toolbar";
import ToolbarButton from "components/RichTextEditor/ToolbarButton";
// --------
import convert from "components/RichTextEditor/utils/convert";
import createFormatStripper from "components/RichTextEditor/utils/createFormatStripper";
import findEntitiesByType from "components/RichTextEditor/utils/findEntitiesByType";
import getEntities from "components/RichTextEditor/utils/getEntities";
import replaceText from "components/RichTextEditor/utils/replaceEntityText";
// ** --------------

import { useCurrentPageId } from "components/RouterContext";

// ** SectionPicker
// ** --------------
import SectionPicker from "components/SectionPicker";
import SectionPickerItem from "components/SectionPicker/Item";
import SectionPickerList from "components/SectionPicker/List";
import SelectedSections from "components/SectionPicker/SelectedSectionsContext";
// ** --------------

import ShortCodeEditor from "components/ShortCodeEditor";

// ** Toasts
// ** --------------
// TODO: Currently does not work, missing utils/timer in ToastContainerToast
// import Toasts from "components/Toasts";
// import ToastContainer from "components/Toasts/ToastContainer";
// import ToastContainerToast from "components/Toasts/ToastContainer/Toast";
import ToastList from "components/Toasts/ToastContainer/ToastList";
import ToastTransition from "components/Toasts/ToastContainer/Transition";
import VerticalTabs from "components/VerticalTabs";
// ** --------------

function App() {
  return (
    <div>
      <Accordion />
      <AliasEditor />
      <AdvancedProperties />
      <CheckboxProperties />
      <DateProperties />
      <DateRangeProperties />
      <AnswerProperties />
      <DurationProperties />
      <NumberProperties />
      <RadioProperties />
      <TextAreaProperties />
      <TextFieldProperties />
      <UnitProperties />
      <Decimal />
      <Fallback />
      <InlineField />
      <MultiLineField />
      <Required />
      <AnswerTypeButton />
      <AnswerTypeGrid />
      <AnswerTypeSelector />
      <PopupTransition />
      <Autocomplete />
      <Badge />
      <BaseTabs />
      <Button variant="primary" type="button">
        Click me!
      </Button>
      <LinkButton />
      <RouteButton />
      <ButtonGroup />
      <CloseButton />
      <DeleteButton />
      <DuplicateButton />
      <IconButton />
      <IconButtonDelete />
      <MoveButton />
      <MovePageButton />
      <SidebarButton />
      <Dropdown />
      <SplitButton />
      <MenuButton />
      <MenuItem />
      <TextButton />
      <ToggleChip />
      <ToggleSwitch />
      <CharacterCounter />
      <Collapsible />
      <CollapsibleMoveable />
      <CollapsibleNavItem />
      <CollapsibleToggled />
      {/* <Comment /> */}
      <CommentEditor />
      <CommentHighlight />
      <CommentNotification />
      <ContentPickerSelect />
      <ContentContainer />
      <AnswerPickerv2 />
      <ErrorMessage />
      <ContentPickerv2 />
      <MenuContentPickerv2 />
      <MetaDataPicker />
      <Options />
      <SectionMenu />
      <VariablePicker />
      <DestinationPicker />
      <DestinationPickerMenu />
      <DeleteConfirmDialog />
      <Dialog />
      <DialogAlert />
      <DialogActionButtons />
      <DialogHeader />
      <DialogIcon />
      <DialogMessage />
      <Form />
      <Label />
      <Input />
      <Select />
      <TextArea />
      <Field />
      <Number />
      <WrappingInput />
      <Typeahead />
      <Tooltip />
      <Column />
      <Grid />
      <IconGrid />
      <IconGridButton />
      <IconText />
      <MainCanvas />
      <ConfirmationModal />
      <ImportContentModal />
      <ImportQuestionReviewModal />
      <ImportSectionReviewModal />
      <Modal />
      <ModalDialog />
      <ModalWithNav />
      <TabList />
      <ContentWrapper />
      <Tabs />
      <QuestionnaireSelectModal />
      <Wizard />
      <NoSearchResults />
      <ErrorPanel />
      <Panel />
      <InformationPanel />
      <ScaleTransition />
      <Popout />
      <QuestionnaireContext />
      <QuestionnaireSettingsModal />
      <QuestionnaireMeta />
      <ScrollPane />
      <SearchBar />
      <BounceTransition />
      <ExpansionTransition />
      <FadeTransition />
      <SlideTransition />
      <Truncated />
      {/* <UserProfile /> */}
      <ValidationError />
      <ValidationError variant="destination" />
      <ValidationError variant="logic" />
      <ValidationError variant="confirmation" />
      <VisuallyHidden>Test</VisuallyHidden>
      <QuestionnairesView />
      <NoResults />
      <NoResultsFiltered />
      <AccessFilter />
      <Header />
      <PaginationNavTable />
      <Pagination />
      <QuestionnairesTable />
      {/* <BaseLayout /> */}
      {/* <PermissionsBanner /> */}
      <AddRowButton />
      <DeleteRowButton />
      <TableInput />
      <TableInputDate />
      <TableSelect />
      <TableTypeaheadInput />
      <TableTypeaheadMenu />
      <Table />
      <TableBody />
      <TableColumn />
      <TableFoot />
      <TableHead />
      <TableHeadColumn />
      <TableRow />
      <Delay />
      <DescribedText />
      {/* <EditorLayout /> */}
      {/* <EditorLayoutTabs /> */}
      {/* <EditorLayoutHeader /> */}
      <PageTitle />
      {/* <EditorToolbar /> */}
      <Error />
      {/* <InputWithConditionalError /> */}
      <ItemSelectModal />
      <ItemSelect />
      <PlainModal />
      {/* <Layout /> */}
      <Link />
      <Loading />
      <Logo />
      <MoveModal />
      <NavItem />
      <OfflineBanner />
      <PillTabs />
      <PositionModal />
      <PreviewLabel />
      <PreviewInput />
      <PreviewField />
      <PreviewUnitInput />
      <AnswerTrailingUnit />
      <CurrencyAnswer />
      <DateAnswer />
      <DateRangeAnswer />
      <DurationAnswer />
      <MultipleChoiceAnswer />
      <TextAnswer />
      <TextAreaAnswer />
      <Answer />
      <Info />
      <PreviewPageTitle />
      <PreviewError />
      <QCodeContext />
      <QuestionPicker />
      <Item />
      <List />
      <SelectedPages />
      <RadioField />
      <RadioLabel />
      <RadioTitle />
      <RadioDescription />
      {/* <RedirectRoute /> */}
      {/* <Reorder /> */}
      <SectionPicker />
      <SectionPickerItem />
      <SectionPickerList />
      <SelectedSections />
      <ShortCodeEditor />
      {/* <Toasts /> */}
      {/* <ToastContainer /> */}
      {/* <ToastContainerToast /> */}
      <ToastList />
      <ToastTransition />
      <VerticalTabs />
    </div>
  );
}

export default App;

module.hot.accept();
