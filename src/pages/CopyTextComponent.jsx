import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Box, Text, border } from "@chakra-ui/react";

const container = {
    height: "45px",
    width: "150px",          
    backgroundColor: "#3795BD",
    // borderRadius: "5px",
    border: "2px solid #3795BD"

}

const CopyTextComponent = ({ text }) => {
  const [copied, setCopied] = useState(false);

  return (
    <Box >
      <Text>{text}</Text>
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        <Button  colorScheme="teal" sx={container}>
            <Text color={"white"} fontWeight="900">{copied ? "Copied!" : "Copy to Clipboard"}</Text>
        </Button>
      </CopyToClipboard>
    </Box>
  );
};

export default CopyTextComponent;
