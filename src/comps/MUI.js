import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import SimpleAppBar from "./examples/SimpleAppBar";
import ButtonAppBar from "./examples/ButtonAppBar";
import MenuAppBar from "./examples/MenuAppBar";
import IntegrationAutosuggest1 from "./examples/IntegrationAutosuggest1"
import IntegrationAutosuggest2 from "./examples/IntegrationAutosuggest2"
import IntegrationReactSelect from "./examples/IntegrationReactSelect"
import ImageAvatars from "./examples/ImageAvatars"
import IconAvatars from "./examples/IconAvatars"
import LetterAvatars from "./examples/LetterAvatars"
import SimpleBadge from "./examples/SimpleBadge"
import SimpleBottomNavigation from "./examples/SimpleBottomNavigation"
import LabelBottomNavigation from "./examples/LabelBottomNavigation"
import FlatButtons from "./examples/FlatButtons"
import RaisedButtons from "./examples/RaisedButtons"
import FloatingActionButtons from "./examples/FloatingActionButtons"
import FloatingActionButtonZoom from "./examples/FloatingActionButtonZoom"
import ButtonSizes from "./examples/ButtonSizes"
import IconButtons from "./examples/IconButtons"
import IconLabelButtons from "./examples/IconLabelButtons"
import ButtonBases from "./examples/ButtonBases"
import SimpleCard from "./examples/SimpleCard"
import SimpleMediaCard from "./examples/SimpleMediaCard"
import MediaControlCard from "./examples/MediaControlCard"
import RecipeReviewCard from "./examples/RecipeReviewCard"
import Chips from "./examples/Chips"
import ChipsArray from "./examples/ChipsArray"
import SimpleDialogDemo from "./examples/SimpleDialogDemo"
import AlertDialog from "./examples/AlertDialog"
import AlertDialogSlide from "./examples/AlertDialogSlide"
import ConfirmationDialogDemo from "./examples/ConfirmationDialogDemo"
import FullScreenDialog from "./examples/FullScreenDialog"
import FormDialog from "./examples/FormDialog"
import ResponsiveDialog from "./examples/ResponsiveDialog"
import ListDividers from "./examples/ListDividers"
import InsetDividers from "./examples/InsetDividers"
import TemporaryDrawer from "./examples/TemporaryDrawer"
import PermanentDrawer from "./examples/PermanentDrawer"
import PersistentDrawer from "./examples/PersistentDrawer"
import MiniDrawer from "./examples/MiniDrawer"
import ResponsiveDrawer from "./examples/ResponsiveDrawer"
import SimpleExpansionPanel from "./examples/SimpleExpansionPanel"
import DetailedExpansionPanel from "./examples/DetailedExpansionPanel"
import ControlledExpansionPanels from "./examples/ControlledExpansionPanels"
import ImageGridList from "./examples/ImageGridList"
import TitlebarGridList from "./examples/TitlebarGridList"
import AdvancedGridList from "./examples/AdvancedGridList"
import SingleLineGridList from "./examples/SingleLineGridList"
import SimpleList from "./examples/SimpleList"
import FolderList from "./examples/FolderList"
import InsetList from "./examples/InsetList"
import NestedList from "./examples/NestedList"
import PinnedSubheaderList from "./examples/PinnedSubheaderList"
import CheckboxList from "./examples/CheckboxList"
import CheckboxListSecondary from "./examples/CheckboxListSecondary"
import SwitchListSecondary from "./examples/SwitchListSecondary"
import InteractiveList from "./examples/InteractiveList"
import SimpleMenu from "./examples/SimpleMenu"
import SimpleListMenu from "./examples/SimpleListMenu"
import LongMenu from "./examples/LongMenu"
import MenuListComposition from "./examples/MenuListComposition"
import ListItemComposition from "./examples/ListItemComposition"
import FadeMenu from "./examples/FadeMenu"
import SimpleModalWrapped from "./examples/SimpleModalWrapped"
import PaperSheet from "./examples/PaperSheet"
import DatePickers from "./examples/DatePickers"
import TimePickers from "./examples/TimePickers"
import DateAndTimePickers from "./examples/DateAndTimePickers"
import AnchorPlayground from "./examples/AnchorPlayground"
import MouseOverPopover from "./examples/MouseOverPopover"
import CircularIndeterminate from "./examples/CircularIndeterminate"
import CircularIntegration from "./examples/CircularIntegration"
import CircularDeterminate from "./examples/CircularDeterminate"
import LinearIndeterminate from "./examples/LinearIndeterminate"
import LinearDeterminate from "./examples/LinearDeterminate"
import LinearBuffer from "./examples/LinearBuffer"
import LinearQuery from "./examples/LinearQuery"
import Checkboxes from "./examples/Checkboxes"
import CheckboxesGroup from "./examples/CheckboxesGroup"
import RadioButtonsGroup from "./examples/RadioButtonsGroup"
import RadioButtons from "./examples/RadioButtons"
import Switches from "./examples/Switches"
import SwitchLabels from "./examples/SwitchLabels"
import SimpleSelect from "./examples/SimpleSelect"
import NativeSelect from "./examples/NativeSelect"
import MultipleSelect from "./examples/MultipleSelect"
import DialogSelect from "./examples/DialogSelect"
import SimpleSnackbar from "./examples/SimpleSnackbar"
import LongTextSnackbar from "./examples/LongTextSnackbar"
import PositionedSnackbar from "./examples/PositionedSnackbar"
import DirectionSnackbar from "./examples/DirectionSnackbar"
import FadeSnackbar from "./examples/FadeSnackbar"
import HorizontalLinearStepper from "./examples/HorizontalLinearStepper"
import HorizontalNonLinearStepper from "./examples/HorizontalNonLinearStepper"
import HorizontalLabelPositionBelowStepper from "./examples/HorizontalLabelPositionBelowStepper"
import HorizontalNonLinearAlternativeLabelStepper from "./examples/HorizontalNonLinearAlternativeLabelStepper"
import VerticalLinearStepper from "./examples/VerticalLinearStepper"
import TextMobileStepper from "./examples/TextMobileStepper"
import DotsMobileStepper from "./examples/DotsMobileStepper"
import ProgressMobileStepper from "./examples/ProgressMobileStepper"
import SimpleTable from "./examples/SimpleTable"
import EnhancedTable from "./examples/EnhancedTable"
import CustomPaginationActionsTable from "./examples/CustomPaginationActionsTable"
import SimpleTabs from "./examples/SimpleTabs"
import TabsWrappedLabel from "./examples/TabsWrappedLabel"
import FullWidthTabs from "./examples/FullWidthTabs"
import CenteredTabs from "./examples/CenteredTabs"
import ScrollableTabsButtonAuto from "./examples/ScrollableTabsButtonAuto"
import ScrollableTabsButtonForce from "./examples/ScrollableTabsButtonForce"
import ScrollableTabsButtonPrevent from "./examples/ScrollableTabsButtonPrevent"
import IconTabs from "./examples/IconTabs"
import IconLabelTabs from "./examples/IconLabelTabs"
import DisabledTabs from "./examples/DisabledTabs"
import TextFields from "./examples/TextFields"
import ComposedTextField from "./examples/ComposedTextField"
import TextFieldMargins from "./examples/TextFieldMargins"
import InputAdornments from "./examples/InputAdornments"
import Inputs from "./examples/Inputs"
import FormattedInputs from "./examples/FormattedInputs"
import CustomizedInputs from "./examples/CustomizedInputs"
import SimpleTooltips from "./examples/SimpleTooltips"
import PositionedTooltips from "./examples/PositionedTooltips"
import ControlledTooltips from "./examples/ControlledTooltips"


const styles = {
  root: {
    margin: "0 10%",
  },
}

class MUI extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>MUI Components</h1>

        <hr/>
        <SimpleAppBar/>
        <hr/>
        <ButtonAppBar/>
        <hr/>
        <MenuAppBar/>
        <hr/>
        <IntegrationAutosuggest1/>
        <hr/>
        <IntegrationAutosuggest2/>
        <hr/>
        <IntegrationReactSelect/>
        <hr/>
        <ImageAvatars/>
        <hr/>
        <IconAvatars/>
        <hr/>
        <LetterAvatars/>
        <hr/>
        <SimpleBadge/>
        <hr/>
        <SimpleBottomNavigation/>
        <hr/>
        <LabelBottomNavigation/>
        <hr/>
        <FlatButtons/>
        <hr/>
        <RaisedButtons/>
        <hr/>
        <FloatingActionButtons/>
        <hr/>
        <FloatingActionButtonZoom/>
        <hr/>
        <ButtonSizes/>
        <hr/>
        <IconButtons/>
        <hr/>
        <IconLabelButtons/>
        <hr/>
        <ButtonBases/>
        <hr/>
        <SimpleCard/>
        <hr/>
        <SimpleMediaCard/>
        <hr/>
        <MediaControlCard/>
        <hr/>
        <RecipeReviewCard/>
        <hr/>
        <Chips/>
        <hr/>
        <ChipsArray/>
        <hr/>
        <SimpleDialogDemo/>
        <hr/>
        <AlertDialog/>
        <hr/>
        <AlertDialogSlide/>
        <hr/>
        <ConfirmationDialogDemo/>
        <hr/>
        <FullScreenDialog/>
        <hr/>
        <FormDialog/>
        <hr/>
        <ResponsiveDialog/>
        <hr/>
        <ListDividers/>
        <hr/>
        <InsetDividers/>
        <hr/>
        <TemporaryDrawer/>
        <hr/>
        <PermanentDrawer/>
        <hr/>
        <PersistentDrawer/>
        <hr/>
        <MiniDrawer/>
        <hr/>
        <ResponsiveDrawer/>
        <hr/>
        <SimpleExpansionPanel/>
        <hr/>
        <DetailedExpansionPanel/>
        <hr/>
        <ControlledExpansionPanels/>
        <hr/>
        <ImageGridList/>
        <hr/>
        <TitlebarGridList/>
        <hr/>
        <AdvancedGridList/>
        <hr/>
        <SingleLineGridList/>
        <hr/>
        <SimpleList/>
        <hr/>
        <FolderList/>
        <hr/>
        <InsetList/>
        <hr/>
        <NestedList/>
        <hr/>
        <PinnedSubheaderList/>
        <hr/>
        <CheckboxList/>
        <hr/>
        <CheckboxListSecondary/>
        <hr/>
        <SwitchListSecondary/>
        <hr/>
        <InteractiveList/>
        <hr/>
        <SimpleMenu/>
        <hr/>
        <SimpleListMenu/>
        <hr/>
        <LongMenu/>
        <hr/>
        <MenuListComposition/>
        <hr/>
        <ListItemComposition/>
        <hr/>
        <FadeMenu/>
        <hr/>
        <SimpleModalWrapped/>
        <hr/>
        <PaperSheet/>
        <hr/>
        <DatePickers/>
        <hr/>
        <TimePickers/>
        <hr/>
        <DateAndTimePickers/>
        <hr/>
        <AnchorPlayground/>
        <hr/>
        <MouseOverPopover/>
        <hr/>
        <CircularIndeterminate/>
        <hr/>
        <CircularIntegration/>
        <hr/>
        <CircularDeterminate/>
        <hr/>
        <LinearIndeterminate/>
        <hr/>
        <LinearDeterminate/>
        <hr/>
        <LinearBuffer/>
        <hr/>
        <LinearQuery/>
        <hr/>
        <Checkboxes/>
        <hr/>
        <CheckboxesGroup/>
        <hr/>
        <RadioButtonsGroup/>
        <hr/>
        <RadioButtons/>
        <hr/>
        <Switches/>
        <hr/>
        <SwitchLabels/>
        <hr/>
        <SimpleSelect/>
        <hr/>
        <NativeSelect/>
        <hr/>
        <MultipleSelect/>
        <hr/>
        <DialogSelect/>
        <hr/>
        <SimpleSnackbar/>
        <hr/>
        <LongTextSnackbar/>
        <hr/>
        <PositionedSnackbar/>
        <hr/>
        <DirectionSnackbar/>
        <hr/>
        <FadeSnackbar/>
        <hr/>
        <HorizontalLinearStepper/>
        <hr/>
        <HorizontalNonLinearStepper/>
        <hr/>
        <HorizontalLabelPositionBelowStepper/>
        <hr/>
        <HorizontalNonLinearAlternativeLabelStepper/>
        <hr/>
        <VerticalLinearStepper/>
        <hr/>
        <TextMobileStepper/>
        <hr/>
        <DotsMobileStepper/>
        <hr/>
        <ProgressMobileStepper/>
        <hr/>
        <SimpleTable/>
        <hr/>
        <EnhancedTable/>
        <hr/>
        <CustomPaginationActionsTable/>
        <hr/>
        <SimpleTabs/>
        <hr/>
        <TabsWrappedLabel/>
        <hr/>
        <FullWidthTabs/>
        <hr/>
        <CenteredTabs/>
        <hr/>
        <ScrollableTabsButtonAuto/>
        <hr/>
        <ScrollableTabsButtonForce/>
        <hr/>
        <ScrollableTabsButtonPrevent/>
        <hr/>
        <IconTabs/>
        <hr/>
        <IconLabelTabs/>
        <hr/>
        <DisabledTabs/>
        <hr/>
        <TextFields/>
        <hr/>
        <ComposedTextField/>
        <hr/>
        <TextFieldMargins/>
        <hr/>
        <InputAdornments/>
        <hr/>
        <Inputs/>
        <hr/>
        <FormattedInputs/>
        <hr/>
        <CustomizedInputs/>
        <hr/>
        <SimpleTooltips/>
        <hr/>
        <PositionedTooltips/>
        <hr/>
        <ControlledTooltips/>
        <hr/>

      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(withRouter(MUI));