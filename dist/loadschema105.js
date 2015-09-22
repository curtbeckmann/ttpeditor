var loadSchema105 = function () {
    var schema = {

  "title": "TTP",
  "type": "object",
  "properties": {
    "NDM_metadata": {
      "type": "object",
      "properties": {
        "authority": {
          "type": "string",
          "description": "Creating authority",
          "minLength": 4,
          "default": "org.opennetworking.odwg"
        },
        "type": {
          "type": "string",
          "description": "NDM Type",
          "enum": [
            "TTPv1",
            "TTPv2"
          ]
        },
        "name": {
          "type": "string",
          "description": "NDM Name",
          "minLength": 1,
          "default": "Sample"
        },
        "version": {
          "type": "string",
          "description": "NDM Version",
          "minLength": 1,
          "default": "1.0.0"
        },
        "OF_protocol_version": {
          "type": "string",
          "description": "OF Protocol Version",
          "enum": [
            "1.3.0",
            "1.3.1",
            "1.3.2",
            "1.3.3",
            "1.3.4",
            "1.3.5",
            "1.4",
            "1.5"
          ]
        },
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string",
            "title": "Line"
          }
        }
      }
    },
    "identifiers": {
      "type": "array",
      "format": "tabs",
      "title": "Identifiers",
      "uniqueItems": true,
      "items": {
        "oneOf": [
          {
            "type": "object",
            "title": "ID",
            "properties": {
              "id": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "enum": [
                  "field",
                  "inst",
                  "action",
                  "error"
                ],
                "default": "field"
              },
              "exp_id": {
                "type": "string"
              },
              "exp_code": {
                "type": "string"
              },
              "doc": {
                "type" : "array",
                "format": "table",
                "title": "Doc",
                "items": {
                  "type": "string",
                  "title": "Line"
                }
              }
            }
          },
          {
            "type": "object",
            "title": "Var",
            "properties": {
              "var": {
                "type": "string"
              },
              "range": {
                "type": "string"
              },
              "doc": {
                "type" : "array",
                "format": "table",
                "title": "Doc",
                "items": {
                  "type": "string",
                  "title": "Line"
                }
              }
            }
          }
        ]
      },
      "default": [
        {
          "id": "sample_id",
          "doc": ["Sample ID doc"]
        },
        {
          "var": "sample_var",
          "doc": ["Sample var doc"]
        }
      ]
    },
    "features": {
      "type": "array",
      "format": "table",
      "title": "Features",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "title": "Feature",
        "properties": {
          "feature": {
            "type": "string"
          },
          "doc": {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string",
              "title": "Line"
            }
          }
        }
      }
    },
    "table_map": {
      "type": "array",
      "format": "table",
      "title": "Table Map",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "title": "Table",
		"properties": {
		  "name": {
		    "type": "string"
		  },
		  "number": {
		    "type": "number"
		  }
		}
      }
    },
    "flow_tables": {
      "type": "array",
      "format": "table",
      "title": "Flow Tables",
      "items": {
        "type": "object",
        "title": "Flow Table",
        "properties": {
          "name": {
            "type": "string"
          },
          "flow_mod_types": {
            "type": "array",
            "format": "table",
            "title": "Flow Mod Type",
            "items": {
              "type": "object",
              "title": "FlowModType",
			  "format": "grid",
              "properties": {
                "name": {
                  "type": "string"
                },
                "priority": {
                  "type": "string"
                },
                "match_set": {
                  "type": "array",
                  "format": "table",
                  "title": "Match Set",
                  "items": {
                    "type": "object",
                    "title": "Match Field",
                    "properties": {
                      "field": {
                        "type": "string",
                        "enum": [
                          "ACTSET_OUTPUT",
                          "ARP_OP",
                          "ARP_SHA",
                          "ARP_SPA",
                          "ARP_THA",
                          "ARP_TPA",
                          "ETH_DST",
                          "ETH_SRC",
                          "ETH_TYPE",
                          "ICMPV4_CODE",
                          "ICMPV4_TYPE",
                          "ICMPV6_CODE",
                          "ICMPV6_TYPE",
                          "IN_PHY_PORT",
                          "IN_PORT",
                          "IPV4_DST",
                          "IPV4_SRC",
                          "IPV6_DST",
                          "IPV6_EXTHDR",
                          "IPV6_FLABEL",
                          "IPV6_ND_SLL",
                          "IPV6_ND_TARGET",
                          "IPV6_ND_TLL",
                          "IPV6_SRC",
                          "IP_DSCP",
                          "IP_ECN",
                          "IP_PROTO",
                          "METADATA",
                          "MPLS_BOS",
                          "MPLS_LABEL",
                          "MPLS_TC",
                          "PACKET_TYPE",
                          "PBB_ISID",
                          "PBB_UCA",
                          "SCTP_DST",
                          "SCTP_SRC",
                          "TCP_DST",
                          "TCP_FLAGS",
                          "TCP_SRC",
                          "TUNNEL_ID",
                          "UDP_DST",
                          "UDP_SRC",
                          "VLAN_PCP",
                          "VLAN_VID"
                        ]
                      },
                      "match_type": {
                        "type": "string",
                        "enum": ["exact", "mask", "prefix", "all_or_exact"]
                      },
                      "mask": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "const_mask": {
                        "type": "string"
                      },
                      "const_value": {
                        "type": "string"
                      },
                      "doc": {
                        "type" : "array",
                        "format": "table",
                        "title": "Doc",
                        "items": {
                          "type": "string",
                          "title": "Line"
                        }
                      }
                    }
                  }
                },
                "instruction_set": {
                  "type": "array",
                  "format": "table",
                  "title": "Instruction Set",
                  "items": {
                    "oneOf": [
                      {
                        "type": "object",
                        "title": "Simple Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "CLEAR_ACTIONS",
                              "EXPERIMENTER",
                              "STAT_TRIGGER"
                            ]
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "Action List Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "APPLY_ACTIONS",
                              "WRITE_ACTIONS"
                            ]
                          },
                          "actions": {
                            "type": "array",
                            "format": "table",
                            "title": "Actions",
                            "items": {
                              "type": "object",
                              "title": "Action",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "enum": [
                                    "COPY_FIELD",
                                    "COPY_TTL_IN",
                                    "COPY_TTL_OUT",
                                    "DEC_MPLS_TTL",
                                    "DEC_NW_TTL",
                                    "EXPERIMENTER",
                                    "GROUP",
                                    "OUTPUT",
                                    "POP_MPLS",
                                    "POP_PBB",
                                    "POP_VLAN",
                                    "PUSH_MPLS",
                                    "PUSH_PBB",
                                    "PUSH_VLAN",
                                    "SET_FIELD",
                                    "SET_MPLS_TTL",
                                    "SET_NW_TTL",
                                    "SET_QUEUE"
                                  ]
                                },
                                "port": {
                                  "type": "string"
                                },
                                "group_id": {
                                  "type": "string"
                                },
                                "queue_id": {
                                  "type": "string"
                                },
                                "ttl": {
                                  "type": "string"
                                },
                                "ethertype": {
                                  "type": "string"
                                },
                                "field": {
                                  "type": "string",
                                  "enum": [
                                    "ACTSET_OUTPUT",
                                    "ARP_OP",
                                    "ARP_SHA",
                                    "ARP_SPA",
                                    "ARP_THA",
                                    "ARP_TPA",
                                    "ETH_DST",
                                    "ETH_SRC",
                                    "ETH_TYPE",
                                    "ICMPV4_CODE",
                                    "ICMPV4_TYPE",
                                    "ICMPV6_CODE",
                                    "ICMPV6_TYPE",
                                    "IN_PHY_PORT",
                                    "IN_PORT",
                                    "IPV4_DST",
                                    "IPV4_SRC",
                                    "IPV6_DST",
                                    "IPV6_EXTHDR",
                                    "IPV6_FLABEL",
                                    "IPV6_ND_SLL",
                                    "IPV6_ND_TARGET",
                                    "IPV6_ND_TLL",
                                    "IPV6_SRC",
                                    "IP_DSCP",
                                    "IP_ECN",
                                    "IP_PROTO",
                                    "METADATA",
                                    "MPLS_BOS",
                                    "MPLS_LABEL",
                                    "MPLS_TC",
                                    "PACKET_TYPE",
                                    "PBB_ISID",
                                    "PBB_UCA",
                                    "SCTP_DST",
                                    "SCTP_SRC",
                                    "TCP_DST",
                                    "TCP_FLAGS",
                                    "TCP_SRC",
                                    "TUNNEL_ID",
                                    "UDP_DST",
                                    "UDP_SRC",
                                    "VLAN_PCP",
                                    "VLAN_VID"
                                  ]
                                },
                                "value": {
                                  "type": "string"
                                },
                                "doc": {
                                  "type" : "array",
                                  "format": "table",
                                  "title": "Doc",
                                  "items": {
                                    "type": "string",
                                    "title": "Line"
                                  }
                                }
                              }
                            }
                          }
                          }
                      },
                      {
                        "type": "object",
                        "title": "Goto Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "GOTO_TABLE"
                            ]
                          },
                          "table": {
                            "type": "string"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "Metadata Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "WRITE_METADATA"
                            ]
                          },
                          "metadata": {
                            "type": "integer"
                          },
                          "metadata_mask": {
                            "type": "integer"
                          }
                        }
                      }
                    ]
                  }
                },
                "doc": {
                  "type" : "array",
                  "format": "table",
                  "title": "Doc",
                  "items": {
                    "type": "string",
                    "title": "Line"
                  }
                }
              }
            }
          },
          "built_in_flow_mods": {
            "type": "array",
            "format": "table",
            "title": "Built In Flow Mods",
            "items": {
              "type": "object",
              "title": "BuiltInFlowMod",
              "properties": {
                "name": {
                  "type": "string"
                },
                "priority": {
                  "type": "string"
                },
                "match_set": {
                  "type": "array",
                  "format": "table",
                  "title": "Match Set",
                  "items": {
                    "type": "object",
                    "title": "Match Field",
                    "properties": {
                      "field": {
                        "type": "string",
                        "enum": [
                          "ACTSET_OUTPUT",
                          "ARP_OP",
                          "ARP_SHA",
                          "ARP_SPA",
                          "ARP_THA",
                          "ARP_TPA",
                          "ETH_DST",
                          "ETH_SRC",
                          "ETH_TYPE",
                          "ICMPV4_CODE",
                          "ICMPV4_TYPE",
                          "ICMPV6_CODE",
                          "ICMPV6_TYPE",
                          "IN_PHY_PORT",
                          "IN_PORT",
                          "IPV4_DST",
                          "IPV4_SRC",
                          "IPV6_DST",
                          "IPV6_EXTHDR",
                          "IPV6_FLABEL",
                          "IPV6_ND_SLL",
                          "IPV6_ND_TARGET",
                          "IPV6_ND_TLL",
                          "IPV6_SRC",
                          "IP_DSCP",
                          "IP_ECN",
                          "IP_PROTO",
                          "METADATA",
                          "MPLS_BOS",
                          "MPLS_LABEL",
                          "MPLS_TC",
                          "PACKET_TYPE",
                          "PBB_ISID",
                          "PBB_UCA",
                          "SCTP_DST",
                          "SCTP_SRC",
                          "TCP_DST",
                          "TCP_FLAGS",
                          "TCP_SRC",
                          "TUNNEL_ID",
                          "UDP_DST",
                          "UDP_SRC",
                          "VLAN_PCP",
                          "VLAN_VID"
                        ]
                      },
                      "match_type": {
                        "type": "string",
                        "enum": ["exact", "mask", "prefix", "all_or_exact"]
                      },
                      "mask": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "const_mask": {
                        "type": "string"
                      },
                      "const_value": {
                        "type": "string"
                      },
                      "doc": {
                        "type" : "array",
                        "format": "table",
                        "title": "Doc",
                        "items": {
                          "type": "string",
                          "title": "Line"
                        }
                      }
                    }
                  }
                },
                "instruction_set": {
                  "type": "array",
                  "format": "table",
                  "title": "Instruction Set",
                  "items": {
                    "oneOf": [
                      {
                        "type": "object",
                        "title": "Simple Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "CLEAR_ACTIONS",
                              "EXPERIMENTER",
                              "STAT_TRIGGER"
                            ]
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "Action List Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "APPLY_ACTIONS",
                              "WRITE_ACTIONS"
                            ]
                          },
                          "actions": {
                            "type": "array",
                            "format": "table",
                            "title": "Actions",
                            "items": {
                              "type": "object",
                              "title": "Action",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "enum": [
                                    "COPY_FIELD",
                                    "COPY_TTL_IN",
                                    "COPY_TTL_OUT",
                                    "DEC_MPLS_TTL",
                                    "DEC_NW_TTL",
                                    "EXPERIMENTER",
                                    "GROUP",
                                    "OUTPUT",
                                    "POP_MPLS",
                                    "POP_PBB",
                                    "POP_VLAN",
                                    "PUSH_MPLS",
                                    "PUSH_PBB",
                                    "PUSH_VLAN",
                                    "SET_FIELD",
                                    "SET_MPLS_TTL",
                                    "SET_NW_TTL",
                                    "SET_QUEUE"
                                  ]
                                },
                                "port": {
                                  "type": "string"
                                },
                                "group_id": {
                                  "type": "string"
                                },
                                "queue_id": {
                                  "type": "string"
                                },
                                "ttl": {
                                  "type": "string"
                                },
                                "ethertype": {
                                  "type": "string"
                                },
                                "field": {
                                  "type": "string",
                                  "enum": [
                                    "ACTSET_OUTPUT",
                                    "ARP_OP",
                                    "ARP_SHA",
                                    "ARP_SPA",
                                    "ARP_THA",
                                    "ARP_TPA",
                                    "ETH_DST",
                                    "ETH_SRC",
                                    "ETH_TYPE",
                                    "ICMPV4_CODE",
                                    "ICMPV4_TYPE",
                                    "ICMPV6_CODE",
                                    "ICMPV6_TYPE",
                                    "IN_PHY_PORT",
                                    "IN_PORT",
                                    "IPV4_DST",
                                    "IPV4_SRC",
                                    "IPV6_DST",
                                    "IPV6_EXTHDR",
                                    "IPV6_FLABEL",
                                    "IPV6_ND_SLL",
                                    "IPV6_ND_TARGET",
                                    "IPV6_ND_TLL",
                                    "IPV6_SRC",
                                    "IP_DSCP",
                                    "IP_ECN",
                                    "IP_PROTO",
                                    "METADATA",
                                    "MPLS_BOS",
                                    "MPLS_LABEL",
                                    "MPLS_TC",
                                    "PACKET_TYPE",
                                    "PBB_ISID",
                                    "PBB_UCA",
                                    "SCTP_DST",
                                    "SCTP_SRC",
                                    "TCP_DST",
                                    "TCP_FLAGS",
                                    "TCP_SRC",
                                    "TUNNEL_ID",
                                    "UDP_DST",
                                    "UDP_SRC",
                                    "VLAN_PCP",
                                    "VLAN_VID"
                                  ]
                                },
                                "value": {
                                  "type": "string"
                                },
                                "doc": {
                                  "type" : "array",
                                  "format": "table",
                                  "title": "Doc",
                                  "items": {
                                    "type": "string",
                                    "title": "Line"
                                  }
                                }
                              }
                            }
                          }
                          }
                      },
                      {
                        "type": "object",
                        "title": "Goto Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "GOTO_TABLE"
                            ]
                          },
                          "table": {
                            "type": "string"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "Metadata Inst",
                        "properties": {
                          "instruction": {
                            "type": "string",
                            "enum": [
                              "WRITE_METADATA"
                            ]
                          },
                          "metadata": {
                            "type": "integer"
                          },
                          "metadata_mask": {
                            "type": "integer"
                          }
                        }
                      }
                    ]
                  }
                },
                "doc": {
                  "type" : "array",
                  "format": "table",
                  "title": "Doc",
                  "items": {
                    "type": "string",
                    "title": "Line"
                  }
                }
              }
            }
          },
          "doc": {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string",
              "title": "Line"
            }
          }
        }
      }
    },
    "group_entry_types": {
      "type": "object",
      "title": "Group Entry Types",
      "properties": {
        "name": {
          "type": "string"
        },
        "group_type": {
          "type": "string",
          "enum": [
            "ALL", "SELECT", "INDIRECT", "FF"
          ]
        },
        "bucket_types": {
          "type": "array",
          "format": "table",
          "title": "Bucket Types",
          "items": {
            "type": "object",
            "title": "Bucket",
            "properties": {
              "name": {
                "type": "string"
              },
              "action_set": {
                "type": "array",
                "format": "table",
                "title": "Action List",
                "items": {
                  "type": "object",
                  "title": "Action",
                  "properties": {
                    "action": {
                      "type": "string",
                      "enum": [
                        "COPY_FIELD",
                        "COPY_TTL_IN",
                        "COPY_TTL_OUT",
                        "DEC_MPLS_TTL",
                        "DEC_NW_TTL",
                        "EXPERIMENTER",
                        "GROUP",
                        "OUTPUT",
                        "POP_MPLS",
                        "POP_PBB",
                        "POP_VLAN",
                        "PUSH_MPLS",
                        "PUSH_PBB",
                        "PUSH_VLAN",
                        "SET_FIELD",
                        "SET_MPLS_TTL",
                        "SET_NW_TTL",
                        "SET_QUEUE"
                      ]
                    },
                    "port": {
                      "type": "string"
                    },
                    "group_id": {
                      "type": "string"
                    },
                    "queue_id": {
                      "type": "string"
                    },
                    "ttl": {
                      "type": "string"
                    },
                    "ethertype": {
                      "type": "string"
                    },
                    "field": {
                      "type": "string",
                      "enum": [
                        "ACTSET_OUTPUT",
                        "ARP_OP",
                        "ARP_SHA",
                        "ARP_SPA",
                        "ARP_THA",
                        "ARP_TPA",
                        "ETH_DST",
                        "ETH_SRC",
                        "ETH_TYPE",
                        "ICMPV4_CODE",
                        "ICMPV4_TYPE",
                        "ICMPV6_CODE",
                        "ICMPV6_TYPE",
                        "IN_PHY_PORT",
                        "IN_PORT",
                        "IPV4_DST",
                        "IPV4_SRC",
                        "IPV6_DST",
                        "IPV6_EXTHDR",
                        "IPV6_FLABEL",
                        "IPV6_ND_SLL",
                        "IPV6_ND_TARGET",
                        "IPV6_ND_TLL",
                        "IPV6_SRC",
                        "IP_DSCP",
                        "IP_ECN",
                        "IP_PROTO",
                        "METADATA",
                        "MPLS_BOS",
                        "MPLS_LABEL",
                        "MPLS_TC",
                        "PACKET_TYPE",
                        "PBB_ISID",
                        "PBB_UCA",
                        "SCTP_DST",
                        "SCTP_SRC",
                        "TCP_DST",
                        "TCP_FLAGS",
                        "TCP_SRC",
                        "TUNNEL_ID",
                        "UDP_DST",
                        "UDP_SRC",
                        "VLAN_PCP",
                        "VLAN_VID"
                      ]
                    },
                    "value": {
                      "type": "string"
                    },
                    "doc":  {
                      "type" : "array",
                      "format": "table",
                      "title": "Doc",
                      "items": {
                        "type": "string",
                        "title": "Line"
                      }
                    }
                  }
                }
              },
              "doc":  {
                "type" : "array",
                "format": "table",
                "title": "Doc",
                "items": {
                  "type": "string",
                  "title": "Line"
                }
              }
            }
          }
        },
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string",
            "title": "Line"
          }
        }
      }
    },
    "packet_out": {
      "type": "array",
      "format": "table",
      "title": "Packet Out",
      "items": {
        "type": "array",
        "format": "table",
        "title": "Action List",
        "items": {
          "type": "object",
          "title": "Action",
          "properties": {
            "action": {
              "type": "string",
              "enum": [
                "COPY_FIELD",
                "COPY_TTL_IN",
                "COPY_TTL_OUT",
                "DEC_MPLS_TTL",
                "DEC_NW_TTL",
                "EXPERIMENTER",
                "GROUP",
                "OUTPUT",
                "POP_MPLS",
                "POP_PBB",
                "POP_VLAN",
                "PUSH_MPLS",
                "PUSH_PBB",
                "PUSH_VLAN",
                "SET_FIELD",
                "SET_MPLS_TTL",
                "SET_NW_TTL",
                "SET_QUEUE"
              ]
            },
            "port": {
              "type": "string"
            },
            "group_id": {
              "type": "string"
            },
            "queue_id": {
              "type": "string"
            },
            "ttl": {
              "type": "string"
            },
            "ethertype": {
              "type": "string"
            },
            "field": {
              "type": "string",
              "enum": [
                "ACTSET_OUTPUT",
                "ARP_OP",
                "ARP_SHA",
                "ARP_SPA",
                "ARP_THA",
                "ARP_TPA",
                "ETH_DST",
                "ETH_SRC",
                "ETH_TYPE",
                "ICMPV4_CODE",
                "ICMPV4_TYPE",
                "ICMPV6_CODE",
                "ICMPV6_TYPE",
                "IN_PHY_PORT",
                "IN_PORT",
                "IPV4_DST",
                "IPV4_SRC",
                "IPV6_DST",
                "IPV6_EXTHDR",
                "IPV6_FLABEL",
                "IPV6_ND_SLL",
                "IPV6_ND_TARGET",
                "IPV6_ND_TLL",
                "IPV6_SRC",
                "IP_DSCP",
                "IP_ECN",
                "IP_PROTO",
                "METADATA",
                "MPLS_BOS",
                "MPLS_LABEL",
                "MPLS_TC",
                "PACKET_TYPE",
                "PBB_ISID",
                "PBB_UCA",
                "SCTP_DST",
                "SCTP_SRC",
                "TCP_DST",
                "TCP_FLAGS",
                "TCP_SRC",
                "TUNNEL_ID",
                "UDP_DST",
                "UDP_SRC",
                "VLAN_PCP",
                "VLAN_VID"
              ]
            },
            "value": {
              "type": "string"
            },
            "doc":  {
              "type" : "array",
              "format": "table",
              "title": "Doc",
              "items": {
                "type": "string",
                "title": "Line"
              }
            }
          }
        }
      }
    },
    "parameters": {
      "type": "array",
      "format": "table",
      "title": "Parameters",
      "items": {
        "type": "object",
        "title": "Parameter",
        "properties": {
          "name": {
            "type" : "string"
          },
          "type": {
            "type" : "string"
          },
          "default": {
            "type" : "string"
          },
          "doc":  {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string",
              "title": "Line"
            }
          }
        }
      }
    },
    "flow_paths": {
      "type": "array",
      "format": "table",
      "title": "Flow Paths",
      "items": {
        "type": "object",
        "title": "Flow Path Item",
        "properties": {
          "name":  {
            "type" : "string"
          },
          "path":  {
            "type" : "array",
            "format": "table",
            "title": "Paths",
            "items": {
              "type": "string",
              "title": "Path"
            }
          },
          "no-path":  {
            "type" : "array",
            "format": "table",
            "title": "No Paths",
            "items": {
              "type": "string",
              "title": "No Path Item"
            }
          },
          "doc":  {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string",
              "title": "Line"
            }
          }
        }
      }
    },
    "security": {
      "type": "object",
      "title": "Security",
      "properties": {
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string",
            "title": "Line"
          }
        }
      }
    }
  }
}
    return schema;
}