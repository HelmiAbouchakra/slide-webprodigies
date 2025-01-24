import { Button } from '@/components/ui/button';
import { ActiveAutomation } from '@/icons/active-automation';
import React from 'react';
import Loader from '../loader';

type Props = {};

const ActivateAutomationButton = (props: Props) => {
  //WIP: Setup optimistic ui
  //WIP: Fetch some automation data
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      {/* WIP : Set the loading state */}
      <Loader state={false}>
        <ActiveAutomation />
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
