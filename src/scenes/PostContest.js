import React, { PureComponent } from 'react';
import {
  Box,
  CardHeader,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Typography,
  withStyles,
  withTheme,
  Button
} from '@material-ui/core';
import { AttachMoney } from '@material-ui/icons';
import faker from 'faker';
import { compose } from 'redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FileUpload from '../components/FileUpload';
import PlaceholderSelect from '../components/PlaceholderSelect';
import SelectBadge from '../components/SelectBadge';
import { CompactCard } from '../global';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  outerMargin: {
    margin: theme.spacing(-2),
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(-1)
    }
  },
  innerPadding: {
    padding: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1)
    }
  },
  moneyPrefix: {
    marginLeft: theme.spacing(-0.5)
  }
})

class PostContest extends PureComponent {
  state = {
    faqList: [],
    categories: [],
    badges: []
  }

  componentDidMount() {
    const faqList = [];
    for (let i = 0; i < 5; i++) {
      faqList.push({
        question: 'How long take my first withdrawal?',
        answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '
      });
    }
    const categories = [];
    for (let i = 0; i < 5; i++) {
      categories.push(faker.lorem.words(2));
    }
    const badges = [{
      color: this.props.theme.palette.success.main,
      title: 'Standard',
      description: 'Free to post, your project will go live instantly and start receiving bids within seconds.',
      price: 0
    },{
      color: this.props.theme.palette.action.disabled,
      title: 'NDA',
      description: 'Freelancers must sign a Non- disclosure Agreement to Apply on your project. Freelancers agree to keep details discussed through private messages and files confidential.',
      price: 5
    },{
      color: this.props.theme.palette.info.main,
      title: 'Featured',
      description: 'Featured projects attract higher-quality bids and are displayed prominently in the `Featured Jobs and Contests` page.',
      price: 5
    },{
      color: this.props.theme.palette.error.main,
      title: 'Urgent',
      description: 'Make your project stand out and let freelancers know that your job is time sensitive.',
      price: 5
    },{
      color: this.props.theme.palette.primary.main,
      title: 'Private',
      description: 'Featured projects attract higher-quality bids and are displayed prominently in the `Featured Jobs and Contests` page.',
      price: 5
    },{
      color: this.props.theme.palette.warning.main,
      title: 'Premium',
      description: 'Make your project stand out and let freelancers know that your job is time sensitive.',
      price: 5
    }];
    this.setState({ faqList, categories, badges });
  }

  render = () => (
    <div className={this.props.classes.root}>
      <Header />
      <Box mx={2} my={8}>
        <Grid container>
          <Grid item lg={2} />
          <Grid item lg={8} xs={12}>
            <Box className={this.props.classes.outerMargin}>
              <Grid container>
                <Grid item md={8} xs={12}>
                  <Box className={this.props.classes.innerPadding}>
                    <CompactCard>
                      <CardHeader
                        title="Post a contest"
                        titleTypographyProps={{
                          variant: 'subtitle1'
                        }}
                      />
                      <Divider />
                      <CardContent>
                        <Box mb={1}>
                          <Typography variant="subtitle2">Provide a name for your contest</Typography>
                        </Box>
                        <OutlinedInput
                          fullWidth
                          margin="dense"
                        />
                        <Box mt={2} mb={1}>
                          <Typography variant="subtitle2">Tell us more about your contest</Typography>
                        </Box>
                        <Box mb={1}>
                          <Typography variant="body2">Start with a bit about yourself or your business, and include an overview of what you need one.</Typography>
                        </Box>
                        <OutlinedInput
                          fullWidth
                          margin="dense"
                          multiline
                          rows={5}
                        />
                        <Box my={1}>
                          <Typography variant="body2" align="right">0/5000</Typography>
                        </Box>
                        <Box mt={3} mb={1}>
                          <Typography variant="subtitle2">Suggested files or attachment (optional)</Typography>
                        </Box>
                        <FileUpload />
                        <Box my={2}>
                          <Divider />
                        </Box>
                        <Box className={this.props.classes.outerMargin}>
                          <Grid container>
                            <Grid item sm={6} xs={12}>
                              <Box className={this.props.classes.innerPadding}>
                                <Box mb={1}>
                                  <Typography variant="subtitle2">Select contest categories</Typography>
                                </Box>
                                <PlaceholderSelect
                                  fullWidth
                                  margin="dense"
                                  variant="outlined"
                                  placeholder="Select one"
                                >
                                  {this.state.categories.map((category, index) => (
                                    <MenuItem key={index} value={category}>{category}</MenuItem>
                                  ))}
                                </PlaceholderSelect>
                              </Box>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                              <Box className={this.props.classes.innerPadding}>
                                <Box mb={1}>
                                  <Typography variant="subtitle2">Select sub-categories</Typography>
                                </Box>
                                <PlaceholderSelect
                                  fullWidth
                                  margin="dense"
                                  variant="outlined"
                                  placeholder="Select one"
                                >
                                  {this.state.categories.map((category, index) => (
                                    <MenuItem key={index} value={category}>{category}</MenuItem>
                                  ))}
                                </PlaceholderSelect>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box mt={3}>
                          <Typography variant="subtitle2">What skills are required?</Typography>
                        </Box>
                        <Box my={1}>
                          <Typography variant="body2">We have detected the following skills to suit your project. Feel free to modify these choices to best suit your needs.</Typography>
                        </Box>
                        <Box mb={2}>
                          <OutlinedInput
                            fullWidth
                            margin="dense"
                            placeholder="Type your required skills"
                          />
                        </Box>
                        <Box className={this.props.classes.outerMargin}>
                          <Grid container>
                            <Grid item sm={6} xs={12}>
                              <Box className={this.props.classes.innerPadding}>
                                <Box mb={1}>
                                  <Typography variant="subtitle2">I need to complete in</Typography>
                                  <Typography variant="body2">Set a amazing budget for your project.</Typography>
                                </Box>
                                <PlaceholderSelect
                                  fullWidth
                                  margin="dense"
                                  variant="outlined"
                                  placeholder="Select one"
                                >
                                  <MenuItem value="7d">7 days or less</MenuItem>
                                  <MenuItem value="14d">14 days or less</MenuItem>
                                  <MenuItem value="1m">1 month or less</MenuItem>
                                </PlaceholderSelect>
                              </Box>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                              <Box className={this.props.classes.innerPadding}>
                                <Box mb={1}>
                                  <Typography variant="subtitle2">Contest Budget</Typography>
                                  <Typography variant="body2">Set a amazing budget for your contest.</Typography>
                                </Box>
                                <OutlinedInput
                                  fullWidth
                                  margin="dense"
                                  startAdornment={(
                                    <InputAdornment position="start" className={this.props.classes.moneyPrefix}>
                                      <AttachMoney />
                                    </InputAdornment>
                                  )}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                        <SelectBadge noCard noSubmit />
                        <FormControlLabel
                          control={(
                            <Checkbox onClick={(e) => e.stopPropagation()} />
                          )}
                          label={<Typography variant="body2">I acknowledge that the Gotlancer screening process is confidential and that I will not publicly disclose details about this process. By submitting you acknowledge that you have read and agree to our Terms and Conditions, Privacy Policy and Cookie Policy.</Typography>}
                          onClick={() => {}}
                        />
                        <Box mt={4} width="100%" textAlign="center">
                          <Box display="inline-block">
                            <Button variant="outlined" size="large" style={{ marginRight: this.props.theme.spacing(2) }}>Save as draft</Button>
                            <Button variant="contained" size="large">Pay and post contest</Button>
                          </Box>
                        </Box>
                      </CardContent>
                    </CompactCard>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box className={this.props.classes.innerPadding}>
                    {this.renderFaqCard()}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={2} />
        </Grid>
      </Box>
      <Footer />
    </div>
  )

  renderFaqCard = () => (
    <CompactCard>
      <CardHeader
        title="Recommended articles"
        titleTypographyProps={{
          variant: 'subtitle1'
        }}
      />
      <Divider />
      <CardContent className="noVertPadding">
        <List disablePadding className="noLastDivider">
          {this.state.faqList.map((faq, index) => (
            <ListItem key={index} disableGutters divider>
              <ListItemText
                primary={faq.question}
                secondary={faq.answer}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </CompactCard>
  )
}

export default compose(
  withStyles(styles),
  withTheme
)(PostContest);