import styled from 'styled-components';

const VebugWrapper = styled.div`
  * {
    background-color: rgba(255, 0, 0, 0.2) !important;
    * {
      background-color: rgba(0, 255, 0, 0.2) !important;
      * {
        background-color: rgba(0, 0, 255, 0.2) !important;
        * {
          background-color: rgba(255, 0, 255, 0.2) !important;
          * {
            background-color: rgba(0, 255, 255, 0.2) !important;
            * {
              background-color: rgba(255, 255, 0, 0.2) !important;
              * {
                background-color: rgba(255, 0, 0, 0.2) !important;
                * {
                  background-color: rgba(0, 255, 0, 0.2) !important;
                  * {
                    background-color: rgba(0, 0, 255, 0.2) !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { VebugWrapper };
