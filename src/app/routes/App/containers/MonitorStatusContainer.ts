/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import { bindActionCreators as bind } from 'redux';
import {
  ComponentClass,
  connect,
} from 'react-redux';

// Local
import {
  DispatchToProps,
  StateToProps,
} from '~/types/redux';
import {
  ValueProps,
  FunctionProps,
  MonitorStatus,
} from '../components/MonitorStatus';
import * as actions from '../actions/MonitorStatusActions';

// --------------------------------------------------------------------------
// Interfaces/Types
// --------------------------------------------------------------------------

/** Container properties. */
interface ContainerProps {}

/** Function that maps the redux state to the wrapped component. */
type Values = StateToProps<ValueProps, ContainerProps>;

/** Function that maps redux dispatch functions to the wrapped component. */
type Functions = DispatchToProps<FunctionProps, ContainerProps>;

/** Container type. */
type Container = ComponentClass<ContainerProps>;

// --------------------------------------------------------------------------
// Property Mapping
// --------------------------------------------------------------------------

/**
 * Maps the redux state to wrapped component properties.
 * @param state Redux state.
 * @param props Container properties.
 */
const values: Values = (state, props) => ({
  loading: state.routes.App.MonitorStatus.loading,
  modalActive: state.routes.App.MonitorStatus.modalActive,
  monitors: state.routes.App.MonitorStatus.monitors,
  monitorsDown: state.routes.App.MonitorStatus.monitorsDown,
  monitorsUp: state.routes.App.MonitorStatus.monitorsUp,
  pollTimeoutID: state.routes.App.MonitorStatus.pollTimeoutID,
  selectedMonitor: state.routes.App.MonitorStatus.selectedMonitor,
});

/**
 * Maps redux dispatch functions to wrapped component properties.
 * @param dispatch Dispatch function for the redux store.
 */
const functions: Functions = (dispatch) => ({
  closeModal: bind(actions.closeModal, dispatch),
  fetchMonitors: bind(actions.fetchMonitors, dispatch),
  openModal: bind(actions.openModal, dispatch),
  selectMonitor: bind(actions.selectMonitor, dispatch),
});

// --------------------------------------------------------------------------
// Container
// --------------------------------------------------------------------------

/**
 * Container for the MonitorStatus component.
 * @type {Container}
 */
export const MonitorStatusContainer: Container = connect(
  values,
  functions,
)(MonitorStatus);
