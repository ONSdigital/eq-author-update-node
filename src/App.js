import React from "react";
import MainLogo from "./logo.svg";
import "App.css";

import Accordion from "components/components-original/Accordion";
import AliasEditor from "components/components-original/AliasEditor";

// ** AnswerContent
// ** --------------
import AdvancedProperties from "components/components-original/AnswerContent/AdvancedProperties";
import CheckboxProperties from "components/components-original/AnswerContent/AnswerProperties/CheckboxProperties";
import DateProperties from "components/components-original/AnswerContent/AnswerProperties/DateProperties";
import DateRangeProperties from "components/components-original/AnswerContent/AnswerProperties/DateRangeProperties";
import DurationProperties from "components/components-original/AnswerContent/AnswerProperties/DurationProperties";
import AnswerProperties from "components/components-original/AnswerContent/AnswerProperties";
import NumberProperties from "components/components-original/AnswerContent/AnswerProperties/NumberProperties";
import RadioProperties from "components/components-original/AnswerContent/AnswerProperties/RadioProperties";
import TextAreaProperties from "components/components-original/AnswerContent/AnswerProperties/TextAreaProperties";
import TextFieldProperties from "components/components-original/AnswerContent/AnswerProperties/TextFieldProperties";
import UnitProperties from "components/components-original/AnswerContent/AnswerProperties/UnitProperties";
import Decimal from "components/components-original/AnswerContent/Decimal";
import Fallback from "components/components-original/AnswerContent/FallbackProperty/Fallback";
import InlineField from "components/components-original/AnswerContent/Format/InlineField";
import MultiLineField from "components/components-original/AnswerContent/Format/MultiLineField";
// ! Broken - uses a scene file to be refactored and added later in development
// import MutuallyExclusive from "components/components-original/AnswerContent/MutuallyExclusive";
import Required from "components/components-original/AnswerContent/Required";
// ** --------------

import AnswerPicker from "components/components-original/AnswerPicker";

// ** AnswerTypeSelector
// ** --------------
import AnswerTypeButton from "components/components-original/AnswerTypeSelector/AnswerTypeButton";
import AnswerTypeGrid from "components/components-original/AnswerTypeSelector/AnswerTypeGrid";
import AnswerTypeSelector from "components/components-original/AnswerTypeSelector";
import PopupTransition from "components/components-original/AnswerTypeSelector/PopupTransition";
// ** --------------

// ** buttons
// ** --------------
import Button from "components/components-original/buttons/Button";
import LinkButton from "components/components-original/buttons/Button/LinkButton";
import RouteButton from "components/components-original/buttons/Button/RouteButton";
import ButtonGroup from "components/components-original/buttons/ButtonGroup";
import CloseButton from "components/components-original/buttons/CloseButton";
import DeleteButton from "components/components-original/buttons/DeleteButton";
import DuplicateButton from "components/components-original/buttons/DuplicateButton";
import IconButton from "components/components-original/buttons/IconButton";
import IconButtonDelete from "components/components-original/buttons/IconButtonDelete";
import MoveButton from "components/components-original/buttons/MoveButton";
import MovePageButton from "components/components-original/buttons/MovePageButton";
import SidebarButton from "components/components-original/buttons/SidebarButton";
import Dropdown from "components/components-original/buttons/SplitButton/Dropdown";
import SplitButton from "components/components-original/buttons/SplitButton";
import MenuButton from "components/components-original/buttons/SplitButton/MenuButton";
import MenuItem from "components/components-original/buttons/SplitButton/MenuItem";
import TextButton from "components/components-original/buttons/TextButton";
import ToggleChip from "components/components-original/buttons/ToggleChip";
import ToggleSwitch from "components/components-original/buttons/ToggleSwitch";
// ** --------------

// ! Broken - Auth uses config
// import Auth from "components/components-original/Auth";

import { Autocomplete } from "components/components-original/Autocomplete";
import Badge from "components/components-original/Badge";
import BaseTabs from "components/components-original/BaseTabs";
import CharacterCounter from "components/components-original/CharacterCounter";
import Collapsible from "components/components-original/Collapsible";
import CollapsibleMoveable from "components/components-original/CollapsibleMoveable";
import CollapsibleNavItem from "components/components-original/CollapsibleNavItem";
import CollapsibleToggled from "components/components-original/CollapsibleToggled";

// ** Comments
// ** --------------
// ! Broken - Comment uses MeContext, which causes an error due to using config
// import Comment from "components/components-original/Comments/Comment";
import CommentEditor from "components/components-original/Comments/CommentEditor";
import CommentHighlight from "components/components-original/Comments/CommentHighlight";
import CommentNotification from "components/components-original/Comments/CommentNotification";
// ** --------------

import ContentContainer from "components/components-original/ContentContainer";
import ContentPickerSelect from "components/components-original/ContentPickerSelect";

// ** ContentPickerv2
// ** --------------
import AnswerPickerv2 from "components/components-original/ContentPickerv2/AnswerPicker";
import { ErrorMessage } from "components/components-original/ContentPickerv2/ErrorMessage";
import ContentPickerv2 from "components/components-original/ContentPickerv2";
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
} from "components/components-original/ContentPickerv2/Menu";
import MetaDataPicker from "components/components-original/ContentPickerv2/MetadataPicker";
import Options from "components/components-original/ContentPickerv2/Options";
import SectionMenu from "components/components-original/ContentPickerv2/SectionMenu";
import VariablePicker from "components/components-original/ContentPickerv2/VariablePicker";
import DestinationPicker from "components/components-original/ContentPickerv2/DestinationPicker";
import DestinationPickerMenu from "components/components-original/ContentPickerv2/DestinationPicker/Menu";
// ** --------------

import DeleteConfirmDialog from "components/components-original/DeleteConfirmDialog";

// ** Dialog
// ** --------------
import Dialog from "components/components-original/Dialog";
import {
  DialogAlert,
  DialogAlertList,
} from "components/components-original/Dialog/DialogAlert";
import DialogActionButtons from "components/components-original/Dialog/DialogButtons";
import DialogHeader from "components/components-original/Dialog/DialogHeader";
import DialogIcon from "components/components-original/Dialog/DialogIcon";
import DialogMessage from "components/components-original/Dialog/DialogMessage";
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
} from "components/components-original/Forms";
// ** --------------

import { Column, Grid } from "components/components-original/Grid";
import {
  IconGrid,
  IconGridButton,
} from "components/components-original/IconGrid";
import IconText from "components/components-original/IconText";
import MainCanvas from "components/components-original/MainCanvas";

// ** Modals
// ** --------------
import ConfirmationModal from "components/components-original/modals/ConfirmationModal";
import ImportContentModal from "components/components-original/modals/ImportContentModal";
import ImportQuestionReviewModal from "components/components-original/modals/ImportQuestionReviewModal";
import ImportSectionReviewModal from "components/components-original/modals/ImportSectionReviewModal";
import Modal from "components/components-original/modals/Modal";
import ModalDialog from "components/components-original/modals/ModalDialog";
import ModalWithNav from "components/components-original/modals/ModalWithNav";
import TabList from "components/components-original/modals/ModalWithNav/Tabs/TabList";
import ContentWrapper from "components/components-original/modals/ModalWithNav/Tabs/ContentWrapper";
import Tabs from "components/components-original/modals/ModalWithNav/Tabs";
import { useQuestionnaireLockingModal } from "components/components-original/modals/QuestionnaireLockingModal";
import QuestionnaireSelectModal from "components/components-original/modals/QuestionnaireSelectModal";
import Wizard from "components/components-original/modals/Wizard";
// ** --------------

import NoSearchResults from "components/components-original/NoSearchResults";

// ** Panels
// ** --------------
import ErrorPanel from "components/components-original/Panel/ErrorPanel";
import { Panel, InformationPanel } from "components/components-original/Panel";
// ** --------------

import ScaleTransition from "components/components-original/Popout/ScaleTransition";
import Popout from "components/components-original/Popout";
import QuestionnaireContext from "components/components-original/QuestionnaireContext";
import QuestionnaireSettingsModal from "components/components-original/QuestionnaireSettingsModal";
import QuestionnaireMeta from "components/components-original/QuestionnaireSettingsModal/QuestionnaireMeta";
import ScrollPane from "components/components-original/ScrollPane";
import SearchBar from "components/components-original/SearchBar";

// ** transitions
// ** --------------
import BounceTransition from "components/components-original/transitions/BounceTransition";
import ExpansionTransition from "components/components-original/transitions/ExpansionTransition";
import FadeTransition from "components/components-original/transitions/FadeTransition";
import SlideTransition from "components/components-original/transitions/SlideTransition";
// ** --------------

import Truncated from "components/components-original/Truncated";
// ! Broken - UserProfile uses MeContext, which causes an error due to using config
// import UserProfile from "components/components-original/UserProfile";
import ValidationError from "components/components-original/ValidationError";
import VisuallyHidden from "components/components-original/VisuallyHidden";
import withEntityEditor from "components/components-original/withEntityEditor";

// ** ImportContentQuestionnairesView
// ** --------------
import QuestionnairesView from "components/components-original/ImportContentQuestionnairesView";
import NoResults from "components/components-original/ImportContentQuestionnairesView/NoResults";
import NoResultsFiltered from "components/components-original/ImportContentQuestionnairesView/NoResultsFiltered";
import reducer from "components/components-original/ImportContentQuestionnairesView/reducer";
import usePersistedReducer from "components/components-original/ImportContentQuestionnairesView/usePersistedReducer";
import AccessFilter from "components/components-original/ImportContentQuestionnairesView/Header/AccessFilter";
import Header from "components/components-original/ImportContentQuestionnairesView/Header";
import PaginationNavTable from "components/components-original/ImportContentQuestionnairesView/PaginationNav";
import Pagination from "components/components-original/ImportContentQuestionnairesView/PaginationNav/PaginationNav";
import QuestionnairesTable from "components/components-original/ImportContentQuestionnairesView/QuestionnairesTable";
// ** --------------

// ** BaseLayout
// ** --------------
import BaseLayout from "components/components-original/BaseLayout";
import PermissionsBanner from "components/components-original/BaseLayout/PermissionsBanner";
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
} from "components/components-original/datatable/Controls";
import {
  Table,
  TableBody,
  TableColumn,
  TableFoot,
  TableHead,
  TableHeadColumn,
  TableRow,
} from "components/components-original/datatable/Elements";
// ** --------------

import Delay from "components/components-original/Delay";
import DescribedText from "components/components-original/DescribedText";

// ** EditorLayout
// ** --------------
// ! Broken - EditorLayout uses MeContext, which causes an error due to using config
// import EditorLayout from "components/components-original/EditorLayout";

import EditorLayoutTabs from "components/components-original/EditorLayout/Tabs";

import EditorLayoutHeader from "components/components-original/EditorLayout/Header";
import PageTitle from "components/components-original/EditorLayout/Header/PageTitle";
// ** --------------

// TODO: Currently does not work, missing App/page/Design/MoveEntityModal and App/page/Design/EditorToolbar
// import EditorToolbar from "components/components-original/EditorToolbar";

import Error from "components/components-original/Error";

// TODO: Currently does not work, missing components-themed/Label, components-themed/panels and components-themed/Toolkit
// import InputWithConditionalError from "components/components-original/InputWithConditionalError";

// ** ItemSelectModal
// ** --------------
import ItemSelectModal from "components/components-original/ItemSelectModal";
import ItemSelect from "components/components-original/ItemSelectModal/ItemSelect";
import PlainModal from "components/components-original/ItemSelectModal/PlainModal";
// ** --------------

// ! Broken - Layout uses MeContext, which causes an error due to using config
// import Layout from "components/components-original/Layout";
import Link from "components/components-original/Link";
import Loading from "components/components-original/Loading";
import Logo from "components/components-original/Logo";
import MoveModal from "components/components-original/MoveModal";
import {
  defaultCallbacks,
  CallbackContextProvider,
  useNavigationCallbacks,
  useSetNavigationCallbacks,
  useSetNavigationCallbacksForPage,
} from "components/components-original/NavigationCallbacks/NavigationCallbacks";
import NavItem from "components/components-original/NavItem";
import OfflineBanner from "components/components-original/OfflineBanner";
import PillTabs from "components/components-original/PillTabs";
import PositionModal from "components/components-original/PositionModal";

// ** preview
// ** --------------
import {
  Label as PreviewLabel,
  Input as PreviewInput,
  Field as PreviewField,
  UnitInput as PreviewUnitInput,
} from "components/components-original/preview/Answers/elements";
import AnswerTrailingUnit from "components/components-original/preview/Answers/AnswerTrailingUnit";
import CurrencyAnswer from "components/components-original/preview/Answers/CurrencyAnswer";
import DateAnswer from "components/components-original/preview/Answers/DateAnswer";
import DateRangeAnswer from "components/components-original/preview/Answers/DateRangeAnswer";
import DurationAnswer from "components/components-original/preview/Answers/DurationAnswer";
import MultipleChoiceAnswer from "components/components-original/preview/Answers/MultipleChoiceAnswer";
import TextAnswer from "components/components-original/preview/Answers/TextAnswer";
import TextAreaAnswer from "components/components-original/preview/Answers/TextAreaAnswer";
import {
  Answer,
  answerComponents,
} from "components/components-original/preview/Answers";
import Info from "components/components-original/preview/elements/Info";
import PreviewPageTitle from "components/components-original/preview/elements/PageTitle";
import PreviewError from "components/components-original/preview/Error";
// ** --------------

import QCodeContext from "components/components-original/QCodeContext";

// ** QuestionPicker
// ** --------------
import QuestionPicker from "components/components-original/QuestionPicker";
import Item from "components/components-original/QuestionPicker/Item";
import List from "components/components-original/QuestionPicker/List";
import SelectedPages from "components/components-original/QuestionPicker/SelectedPagesContext";
// ** --------------

import {
  RadioField,
  RadioLabel,
  RadioTitle,
  RadioDescription,
} from "components/components-original/Radio";
import RedirectRoute from "components/components-original/RedirectRoute";
import Reorder from "components/components-original/Reorder";

// ** RichTextEditor
// ** --------------
import PipedValue from "components/components-original/RichTextEditor/entities/PipedValue";
import LinkPlugin from "components/components-original/RichTextEditor/LinkPlugin";
import LinkPluginToolbarButton from "components/components-original/RichTextEditor/LinkPlugin/ToolbarButton";
import RichTextEditor from "components/components-original/RichTextEditor";
import PipingMenu from "components/components-original/RichTextEditor/PipingMenu";
import Toolbar from "components/components-original/RichTextEditor/Toolbar";
import ToolbarButton from "components/components-original/RichTextEditor/ToolbarButton";
// --------
import convert from "components/components-original/RichTextEditor/utils/convert";
import createFormatStripper from "components/components-original/RichTextEditor/utils/createFormatStripper";
import findEntitiesByType from "components/components-original/RichTextEditor/utils/findEntitiesByType";
import getEntities from "components/components-original/RichTextEditor/utils/getEntities";
import replaceText from "components/components-original/RichTextEditor/utils/replaceEntityText";
// ** --------------

import { useCurrentPageId } from "components/components-original/RouterContext";

// ** SectionPicker
// ** --------------
import SectionPicker from "components/components-original/SectionPicker";
import SectionPickerItem from "components/components-original/SectionPicker/Item";
import SectionPickerList from "components/components-original/SectionPicker/List";
import SelectedSections from "components/components-original/SectionPicker/SelectedSectionsContext";
// ** --------------

import ShortCodeEditor from "components/components-original/ShortCodeEditor";

// ** Toasts
// ** --------------
import Toasts from "components/components-original/Toasts";
import ToastContainer from "components/components-original/Toasts/ToastContainer";
import ToastContainerToast from "components/components-original/Toasts/ToastContainer/Toast";
import ToastList from "components/components-original/Toasts/ToastContainer/ToastList";
import ToastTransition from "components/components-original/Toasts/ToastContainer/Transition";
import VerticalTabs from "components/components-original/VerticalTabs";
// ** --------------

// ** --------------
// ** Components Themed
// ** --------------
import ThemedButton from "components/components-themed/buttons";
import Feedback from "components/components-themed/Feedback";
import Footer from "components/components-themed/Footer";
// ! Broken - ThemedHeader uses MeContext, which causes an error due to using config
// import ThemedHeader from "components/components-themed/Header";

// ** HomepageQuestionnairesView
// ** --------------
import HomepageQuestionnairesViewHeader from "components/components-themed/HomepageQuestionnairesView/Header";
import HomepageQuestionnairesViewPaginationNavIndex from "components/components-themed/HomepageQuestionnairesView/PaginationNav";
import HomepageQuestionnairesViewPaginationNav from "components/components-themed/HomepageQuestionnairesView/PaginationNav/PaginationNav";
import HomepageQuestionnairesViewQuestionnairesTable from "components/components-themed/HomepageQuestionnairesView/QuestionnairesTable";
import HomepageQuestionnairesView from "components/components-themed/HomepageQuestionnairesView";
import HomepageQuestionnairesViewNoResults from "components/components-themed/HomepageQuestionnairesView/NoResults";
import HomepageQuestionnairesViewReducer from "components/components-themed/HomepageQuestionnairesView/reducer";
import HomepageQuestionnairesViewUsePersistedReducer from "components/components-themed/HomepageQuestionnairesView/usePersistedReducer";
// ** --------------

// ** HomepageQuestionnairesTable
// ** --------------
import HomepageQuestionnaireTableFormattedDate from "components/components-themed/HomepageQuestionnaireTable/FormattedDate";
import HomepageQuestionnaireTable from "components/components-themed/HomepageQuestionnaireTable";
import HomepageQuestionnaireTableRow from "components/components-themed/HomepageQuestionnaireTable/row";
import HomepageQuestionnaireTableTableBody from "components/components-themed/HomepageQuestionnaireTable/tableBody";
import HomepageQuestionnaireTableTableHead from "components/components-themed/HomepageQuestionnaireTable/tableHead";
import HomepageQuestionnaireTableTableHeadings from "components/components-themed/HomepageQuestionnaireTable/tableHeadings";
// ** --------------

import ThemedInput from "components/components-themed/Input";
import PasswordInput from "components/components-themed/Input/PasswordInput";
import ThemedLabel from "./components/components-themed/Label";
import ThemedPanel from "./components/components-themed/panels/panel";
import {
  PageTitle as ThemedPageTitle,
  PageSubTitle,
  Description,
  FieldDescription,
  InlineDescription,
  InlineDescriptionBold,
  Link as ThemedLink,
  ButtonLink,
  InlineLink,
  PasswordLink,
  CheckBoxField,
  CheckboxInput,
} from "components/components-themed/Toolkit";

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
      <BaseLayout />
      <PermissionsBanner />
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
      <EditorLayoutTabs />
      <EditorLayoutHeader />
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
      <RedirectRoute />
      <Reorder />
      <PipedValue />
      <LinkPlugin />
      <LinkPluginToolbarButton />
      <RichTextEditor />
      <PipingMenu />
      <Toolbar />
      <ToolbarButton />
      <SectionPicker />
      <SectionPickerItem />
      <SectionPickerList />
      <SelectedSections />
      <ShortCodeEditor />
      <Toasts />
      <ToastContainer />
      <ToastContainerToast />
      <ToastList />
      <ToastTransition />
      <VerticalTabs />

      {/* Components Themed */}

      <ThemedButton variant="primary" />
      <ThemedButton variant="secondary" />
      <ThemedButton variant="ghost" />
      <ThemedButton variant="ghost-primary" />
      <ThemedButton variant="ghost-white" />
      <ThemedButton variant="confirm" />
      <ThemedButton small />
      <ThemedButton narrow />
      <Button icon={<MainLogo />} iconLeft>
        Left
      </Button>
      <Button icon={<MainLogo />} iconRight>
        Right
      </Button>
      <Button noBorders />
      <Feedback />
      <Footer />
      {/* <ThemedHeader /> */}
      <Header />
      <HomepageQuestionnairesViewHeader />
      <HomepageQuestionnairesViewPaginationNavIndex />
      <HomepageQuestionnairesViewPaginationNav />
      <HomepageQuestionnairesViewQuestionnairesTable />
      <HomepageQuestionnairesView />
      <HomepageQuestionnairesViewNoResults />
      <HomepageQuestionnairesViewReducer />
      <HomepageQuestionnairesViewUsePersistedReducer />
      <HomepageQuestionnaireTableFormattedDate />
      <HomepageQuestionnaireTable />
      <HomepageQuestionnaireTableRow />
      <HomepageQuestionnaireTableTableBody />
      <HomepageQuestionnaireTableTableHead />
      <HomepageQuestionnaireTableTableHeadings />
      <ThemedInput />
      <PasswordInput />
      <ThemedLabel />
      <ThemedPanel />
      <Toolkit />
    </div>
  );
}

export default App;

module.hot.accept();
