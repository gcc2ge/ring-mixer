#!/usr/bin/env bash
solc --abi contracts/* -o build/ --overwrite
solc --bin contracts/* -o build/ --overwrite
