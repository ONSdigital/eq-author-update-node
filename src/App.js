import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Accordion from "components/Accordion";
import AliasEditor from "./components/AliasEditor";

// ** AnswerContent
// ** --------------
import AdvancedProperties from "./components/AnswerContent/AdvancedProperties";
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
import Button from "./components/buttons/Button";
import LinkButton from "./components/buttons/Button/LinkButton";
import RouteButton from "./components/buttons/Button/RouteButton";
import ButtonGroup from "./components/buttons/ButtonGroup";
import CloseButton from "./components/buttons/CloseButton";
import DeleteButton from "./components/buttons/DeleteButton";
import DuplicateButton from "./components/buttons/DuplicateButton";
import IconButton from "./components/buttons/IconButton";
import IconButtonDelete from "./components/buttons/IconButtonDelete";
import MoveButton from "./components/buttons/MoveButton";
import MovePageButton from "./components/buttons/MovePageButton";
import SidebarButton from "./components/buttons/SidebarButton";
import Dropdown from "./components/buttons/SplitButton/Dropdown";
import SplitButton from "./components/buttons/SplitButton";
import MenuButton from "./components/buttons/SplitButton/MenuButton";
import MenuItem from "./components/buttons/SplitButton/MenuItem";
import TextButton from "./components/buttons/TextButton";
import ToggleChip from "./components/buttons/ToggleChip";
import ToggleSwitch from "./components/buttons/ToggleSwitch";
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
    </div>
  );
}

export default App;

module.hot.accept();
