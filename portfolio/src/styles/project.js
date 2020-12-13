import React from 'react';
import styled from 'styled-components';
import { variables, mediaQueries } from './variables';

const { fonts, colors } = variables;

export const ProjectStyles = styled.div`
  background: white;
  padding: 3rem;
  /* box-shadow: 3px 12px 30px #ccc; */

  .wrapper--project__details {
    margin: 0 -1rem;
  }

  .project__intro {
    display: flex;
    /* justify-content: center; */
  }

  .wrapper__header--project {
    /* width: 50%; */
    max-width: none;
    padding: 3rem;
    text-align: center;
    margin: 0;
    margin-bottom: 3rem;
    background: ${colors.light};
    /* border-bottom: 3px solid ${colors.primary}; */
  }

  .wrapper__title {
    margin-bottom: 0;
  }

  .project__keywords {
    color: ${colors.black};

    .keyword {
      padding: .5rem 0;
      font-size: 1.4rem;
      font-family: ${fonts.body};
      padding-left: 1rem;

      &:not(:first-child)::before {
        content: '& ';
        font-family: ${fonts.italic};
        font-weight: bold;
        color: ${colors.primary};
        padding-right: 1rem;
      }

      &:first-child {
        padding-left: 2rem;
      }
    }
  }

  .desc--project {
    max-width: 58rem;
    width: 50%;
    margin: 0 1rem;
  }

  .project__thumbnail {
    width: 50%;
    margin: 0 1rem;
  }

  .left {

    .project__thumbnail {
      order: -1;
    }
  }
`;