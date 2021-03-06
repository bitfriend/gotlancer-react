import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { connect } from 'react-redux';

import Settings from './scenes/Settings';
import FindJob from './scenes/FindJob';
import JobDetails from './scenes/JobDetails';
import ApplyJob from './scenes/ApplyJob';
import BuyerHome from './scenes/BuyerHome';
import Messenger from './scenes/Messenger';
import Profile from './scenes/Profile';
import PostJob from './scenes/PostJob';
import Membership from './scenes/Membership';
import Notifications from './scenes/Notifications';
import Projects from './scenes/Projects';
import Project from './scenes/Project';
import Exams from './scenes/Exams';
import Exam from './scenes/Exam';
import PostOffer from './scenes/PostOffer';
import BrowseOffers from './scenes/BrowseOffers';
import OfferDetails from './scenes/OfferDetails';
import Offer from './scenes/Offer';
import FindFreelancer from './scenes/FindFreelancer';
import PostContest from './scenes/PostContest';
import FindContest from './scenes/FindContest';
import Contest from './scenes/Contest';
import FileHandover from './scenes/Contest/FileHandover';
import SubmitDesign from './scenes/Contest/SubmitDesign';

import BuyBidCredit from './scenes/Finance/BuyBidCredit';
import Checkout from './scenes/Finance/BuyBidCredit/Checkout';
import DepositFund from './scenes/Finance/DepositFund';
import PaymentHistory from './scenes/Finance/PaymentHistory';
import Dispute from './scenes/Finance/Dispute';
import WithdrawFund from './scenes/Finance/WithdrawFund';

import AddBank from './scenes/Settings/PaymentsPayouts/AddBank';
import AddBkash from './scenes/Settings/PaymentsPayouts/AddBkash';
import AddGst from './scenes/Settings/PaymentsPayouts/AddGst';
import AddNagad from './scenes/Settings/PaymentsPayouts/AddNagad';
import AddPan from './scenes/Settings/PaymentsPayouts/AddPan';
import AddPayPal from './scenes/Settings/PaymentsPayouts/AddPayPal';
import AddPayoneer from './scenes/Settings/PaymentsPayouts/AddPayoneer';
import AddSkrill from './scenes/Settings/PaymentsPayouts/AddSkrill';
import GlobalPreferences from './scenes/Settings/GlobalPreferences';
import InviteFriends from './scenes/Settings/InviteFriends';
import LoginSecurity from './scenes/Settings/LoginSecurity';
import SettingMembership from './scenes/Settings/Membership';
import SettingNotifications from './scenes/Settings/Notifications';
import PaymentsPayouts from './scenes/Settings/PaymentsPayouts';
import PersonalInfo from './scenes/Settings/PersonalInfo';
import VerifyIdentity from './scenes/Settings/VerifyIdentity';

import { darkTheme, lightTheme } from './themes';
import ScrollToTop from './components/ScrollToTop';

const routes = [{
  path: '/',
  component: BuyerHome
},{
  path: '/find_job',
  component: FindJob
},{
  path: '/job_details',
  component: JobDetails
},{
  path: '/apply_job',
  component: ApplyJob
},{
  path: '/deposit_fund',
  component: DepositFund
},{
  path: '/buy_bid_credit',
  component: BuyBidCredit
},{
  path: '/buy_bid_credit/checkout',
  component: Checkout
},{
  path: '/payment_history',
  component: PaymentHistory
},{
  path: '/profile',
  component: Profile
},{
  path: '/dispute',
  component: Dispute
},{
  path: '/withdraw_fund',
  component: WithdrawFund
},{
  path: '/post_job',
  component: PostJob
},{
  path: '/membership',
  component: Membership
},{
  path: '/projects',
  component: Projects
},{
  path: '/project',
  component: Project
},{
  path: '/exams',
  component: Exams
},{
  path: '/exam',
  component: Exam
},{
  path: '/post_offer',
  component: PostOffer
},{
  path: '/browse_offers',
  component: BrowseOffers
},{
  path: '/offer_details',
  component: OfferDetails
},{
  path: '/offer',
  component: Offer
},{
  path: '/find_freelancer',
  component: FindFreelancer
},{
  path: '/post_contest',
  component: PostContest
},{
  path: '/find_contest',
  component: FindContest
},{
  path: '/contest',
  component: Contest
},{
  path: '/contest/file_handover',
  component: FileHandover
},{
  path: '/contest/submit_design',
  component: SubmitDesign
},{
  path: '/notifications',
  component: Notifications
},{
  path: '/settings',
  component: Settings
},{
  path: '/settings/personal_info',
  component: PersonalInfo
},{
  path: '/settings/login_security',
  component: LoginSecurity
},{
  path: '/settings/payments_payouts',
  component: PaymentsPayouts
},{
  path: '/settings/payments_payouts/add_bank',
  component: AddBank
},{
  path: '/settings/payments_payouts/add_bkash',
  component: AddBkash
},{
  path: '/settings/payments_payouts/add_gst',
  component: AddGst
},{
  path: '/settings/payments_payouts/add_nagad',
  component: AddNagad
},{
  path: '/settings/payments_payouts/add_pan',
  component: AddPan
},{
  path: '/settings/payments_payouts/add_paypal',
  component: AddPayPal
},{
  path: '/settings/payments_payouts/add_payoneer',
  component: AddPayoneer
},{
  path: '/settings/payments_payouts/add_skrill',
  component: AddSkrill
},{
  path: '/settings/verify_identity',
  component: VerifyIdentity
},{
  path: '/settings/membership',
  component: SettingMembership
},{
  path: '/settings/notifications',
  component: SettingNotifications
},{
  path: '/settings/global_preferences',
  component: GlobalPreferences
},{
  path: '/settings/invite_friends',
  component: InviteFriends
},{
  path: '/messenger',
  component: Messenger
}];

class Content extends PureComponent {
  render = () => (
    <ThemeProvider theme={this.props.themeMode === 'dark' ? darkTheme : lightTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
          <ScrollToTop />
          <div className="App">
            <Switch>
              {routes.map(({ path, component }, index) => (
                <Route key={index} exact path={path} component={component} />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

const mapStateToProps = ({
  app: { themeMode }
}) => ({
  themeMode
});

export default connect(mapStateToProps)(Content);