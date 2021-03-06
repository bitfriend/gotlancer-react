import React, { PureComponent } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  OutlinedInput,
  Typography,
  withStyles
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  field: {
    margin: theme.spacing(3, 0)
  },
  find: {
    marginLeft: theme.spacing(1)
  }
})

class AddBkash extends PureComponent {
  render = () => (
    <div className={this.props.classes.root}>
      <Header />
      <Box mx={2} my={8}>
        <Grid container>
          <Grid item lg={2} />
          <Grid item lg={8} xs={12} style={{ maxWidth: 600 }}>
            <Box mb={2}>
              <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRight />}>
                <Link href="/settings">Settings</Link>
                <Link href="/settings/payments_payouts">Payments &amp; Payouts</Link>
                <Typography color="textSecondary">Add bKash</Typography>
              </Breadcrumbs>
            </Box>
            <Box mb={2}>
              <Typography variant="h5">Add bKash</Typography>
            </Box>
            <Box className={this.props.classes.field}>
              <Typography variant="subtitle1">First Name</Typography>
              <Typography variant="body2">First Name, 2 to 26 characters in length</Typography>
              <Box mt={2}>
                <OutlinedInput
                  fullWidth
                  margin="dense"
                  placeholder="Enter First Name"
                />
              </Box>
            </Box>
            <Box className={this.props.classes.field}>
              <Typography variant="subtitle1">Last Name</Typography>
              <Typography variant="body2">Last Name, 2 to 26 characters in length</Typography>
              <Box mt={2}>
                <OutlinedInput
                  fullWidth
                  margin="dense"
                  placeholder="Enter Last Name"
                />
              </Box>
            </Box>
            <Box className={this.props.classes.field}>
              <Typography variant="subtitle1">bKash registered Mobile Number</Typography>
              <Box mt={2}>
                <OutlinedInput
                  fullWidth
                  margin="dense"
                  placeholder="We need your bKash registered mobile number for send you money,"
                />
              </Box>
            </Box>
            <Box className={this.props.classes.field}>
              <FormControlLabel
                control={(
                  <Checkbox onClick={(e) => e.stopPropagation()} />
                )}
                label={<Typography variant="body2">I attest that I am the owner and have full authorization to this bKash account.</Typography>}
                onClick={() => {}}
              />
            </Box>
            <Box className={this.props.classes.field}>
              <Box mr={2} component="span">
                <Button variant="outlined" size="large">Back</Button>
              </Box>
              <Button variant="contained" size="large">Add my account</Button>
            </Box>
          </Grid>
          <Grid item lg={2} />
        </Grid>
      </Box>
      <Footer />
    </div>
  )
}

export default withStyles(styles)(AddBkash);